// server/index.js

const User = require("./models/User");

const Event = require("./models/Events");

const Comments = require("./models/Comments");

const express = require("express");

const sequelize = require("./config/db");

const PORT = process.env.PORT || 80;
const app = express();
const path = require('path');

const reactBuild = path.join(__dirname.substring(0,__dirname.length-6), "client","build");

// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JsonWebTokenError = require("jsonwebtoken/lib/JsonWebTokenError");

const jwtKey = "my_secret_key"
const jwtExpirySeconds = 1800

// parse application/json, basically parse incoming Request Object as a JSON Object
app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.static(reactBuild));

app.post("/comments/get", (req, res) => {
  Comments.findAll({
    include: [{
      model: User,
      attributes: {exclude: ["password"]}
    }]
  }).then(r => res.status(202).json(r));
})


app.put("/comments/add", (req, res) => {
  const userID = req.body.userID
  const eventID = req.body.eventid
  let comment = {
    //id : req.body.id,
    content : req.body.content,
    eventId : req.body.eventid
    , userId : userID
  }
  Event.update(Comments.create(comment), {where: {id: eventID}
  }).then(r => res.status(202).json(r))
  //Event.upsert()
})

app.get("/welcome", (req, res) => {
    // We can obtain the session token from the requests cookies, which come with every request
    const token = req.cookies.token
    // if the cookie is not set, return an unauthorized error
    if (!token) {
      return res.status(402).end()
    }

  let payload;
  try {
      // Parse the JWT string and store the result in `payload`.
      // Note that we are passing the key in this method as well. This method will throw an error
      // if the token is invalid (if it has expired according to the expiry time we set on sign in),
      // or if the signature does not match
      payload = jwt.verify(token, jwtKey)
    } catch (e) {
      if (e instanceof JsonWebTokenError) {
        // if the error thrown is because the JWT is unauthorized, return a 401 error
        return res.status(401).end()
      }
      // otherwise, return a bad request error
      return res.status(400).end()
    }
  res.status(202).json({message :payload.email, username :payload.username, user_id:payload.user_id})
});

app.post("/refresh", (req, res) => {
  // (BEGIN) The code uptil this point is the same as the first part of the `welcome` route
  const token = req.cookies.token

  if (!token) {
    return res.status(401).end()
  }

  var payload
  try {
    payload = jwt.verify(token, jwtKey)
  } catch (e) {
    if (e instanceof JsonWebTokenError) {
      return res.status(401).end()
    }
    return res.status(400).end()
  }
  // (END) The code uptil this point is the same as the first part of the `welcome` route

  // We ensure that a new token is not issued until enough time has elapsed
  // In this case, a new token will only be issued if the old token is within
  // 30 seconds of expiry. Otherwise, return a bad request status
  const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
  if (payload.exp - nowUnixSeconds > 30) {
    return res.status(400).end()
  }

  // Now, create a new token for the current user, with a renewed expiration time
  const newToken = jwt.sign({ username: payload.username }, jwtKey, {
    algorithm: "HS256",
    expiresIn: jwtExpirySeconds,
  })

  // Set the new token as the users `token` cookie
  res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 })
  res.end()
})

app.get('/event/get/:id', (req,res) => {
  const id = req.params.id
  Event.findOne({where: {id: id}}).then(post => res.json(post))
})

sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});

//register
app.post("/user", async (req, res) => {
  // Our register logic starts here
  try {
    // Validate user input
    if (!(req.body.email && req.body.password && req.body.userName)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    let email = req.body.email
    const oldUser = await User.findOne( { where :{email}} )
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    let encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      userName: req.body.userName,
      email: req.body.email,
      password: encryptedPassword
    }
    User.create(user)
    res.end()
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

//login
app.post("/users/get", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    let email = req.body.email
    let password = req.body.password

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Check if user exist in our database
    let findUser = await User.findOne( { where :{email}} )
    if (findUser){
      if(await bcrypt.compare(password, findUser.password)) {
        // Create token
        const token = jwt.sign(
            { user_id: findUser.id, email, username: findUser.userName },
            jwtKey,
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
        );
        // save user token
        findUser.token = token;
        res.cookie("token", token, { maxAge: jwtExpirySeconds * 1000 })
        res.status(204).end()
        //res.status(204).json(findUser);
      }
    } else {
      console.log("øv")
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
});

app.delete('/user/:id', (req, res) => {
  const id = req.params.id
  User.destroy({where: {id:id}}).then(()=> res.json("user deleted"))
})

app.post('/event', (req, res) => {
  const event = {
    name: req.body.name,
    description: req.body.description,
    emails: req.body.email,
    date: req.body.date,
    color: "#F6EFDF"
    //userId: req.user.id
  }
  Event.create(event).then(event => res.json(event))
})

app.post('/event/get', (req, res) => {
  Event.findAll({where: {emails: req.body.email}}).then((response) => {
    res.json(response)
    }
  )
})

app.put('/event/edit/:id', (req, res) => {
  const eventId = req.params.id
  Event.findOne({where: {id: eventId}}).then((response) => {
    var event = {
      name : req.body.name,
      description : req.body.description,
      date : req.body.date,
      color : req.body.color
    }
    Event.update(event, {where: {id: eventId}
    }).then(() => {
      res.json({msg: "Event updated"})
    }).catch((err) => {
      console.log(err)
      res.send({msg:"Something went wrong"})
    })
  })
})

/*app.put("/event/:id", (req,res) => {
  const id = req.params.id
  Event.update(req.body, {where: {id: id}}).then(() => {
    res.json("Event updated")
  }).catch((err) => {
    console.log(err)
  })
})*/

app.get("*", async(req,res) =>{
  res.sendFile(path.join(reactBuild,"index.html"))
} )


app.delete('/event/delete/:id', (req, res) => {
  const id = req.params.id
  Event.destroy({where: {id:id}}).then(()=> res.json({msg:"EVENT DELETED"}))
})
