// server/index.js
const User = require("./models/User");

const express = require("express");

const sequelize = require("./config/db");

const PORT = process.env.PORT || 3001;

const app = express();

const path = require('path');

const reactBuild = path.join(__dirname.substring(0,__dirname.length-6), "client","build");

// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
//app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(reactBuild));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from patrick!"});
});

app.get("/apis", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ title: "Bryllupsdag",picture : "city", date : "14/4/2022", color :"#CCFFE5"});
});
app.get("/apitest", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ title: "Test",picture : "Valley", date : "22/7/2029", color :"#F6E2DF"});
});

app.get("/test", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json([{ firstName: "Tester",lastName : "Valley"}]);
});

app.post("/test", (req,res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const user ={
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }
  res.json([{user}]);
});


app.get("*", async(req,res) =>{
  res.sendFile(path.join(reactBuild,"index.html"))
} )


sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});

/*
const user = User.create({
  email: "user@example.com",
  firstName: "John",
  lastName: "Doe",
  password: "password"
})*/

//User.findOne({ where: { id: "d70b7455-8617-468a-bc8a-00f92ba4d05e"}}).then((user) => {console.log(user.dataValues.firstName);})

app.post('/user', (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }
  User.create(user).then(user => res.json(user))
  res.send({ succes: 'true' });

})

app.delete('/user/:id', (req, res) => {
  const id = req.params.id
  User.destroy({where: {id:id}}).then(()=> res.json("user deleted"))
})

app.get('/user/get/:email/:inputPass', (req, res) => {
  var succes = false;
  //res.set('Access-Control-Allow-Origin', "*");
  const email = req.params.email
  const inputPass = req.params.inputPass

  User.findOne({where: {email:email},and : {password:inputPass}}).then((user) => {
    if(inputPass=== user.dataValues.password){
      succes = true;
      console.log("virker")
      res.status(400).send('Bad Request')
    } else {
      succes = false;
      res.sendStatus(404)
      console.log("virker ikke!!")
    }
    //res.send(succes);
  })
  if(succes) {
    console.log("virker")
    res.status(400).send('Bad Request')
  }
  else {
    console.log("virker ikke!!")
    res.sendStatus(404)
  }
  /*.catch(err => {
    console.log(err)
    console.log("Specified email is not found")
    //res.send(succes);
  }
  );*/
  
})
