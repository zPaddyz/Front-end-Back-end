// server/index.js
const User = require("./models/User");

const express = require("express");

const sequelize = require("./config/db");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.get("/api", (req, res) => {
  res.json({ message: "Hello from patrick!"});
});

app.get("/apis", (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json({ title: "Bryllupsdag",picture : "city", date : "14/4/2022", color :"#CCFFE5"});
  });
  app.get("/apitest", (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
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
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  }
  User.create(user).then(user => res.json(user))
})

app.delete('/user/:id', (req, res) => {
  const id = req.params.id
  User.destroy({where: {id:id}}).then(()=> res.json("user deleted"))
})

app.get('/user/get/:email/:inputPass', (req, res) => {
  var password;
  res.set('Access-Control-Allow-Origin', "*");
  const email = req.params.email
  const inputPass = req.params.inputPass
    User.findOne({where: {email:email},and : {password:inputPass}}).then((user) => {
        password = user.dataValues.password;
        res.json([password]);
    })
})