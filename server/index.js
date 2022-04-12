// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from patrick!"});
});

app.get("/apis", (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json({ title: "Bryllupsdag",picture : "city", date : "14/4/2022"});
  });
  app.get("/apitest", (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json({ title: "Test",picture : "Valley", date : "22/7/2029"});
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
    res.json( user);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});