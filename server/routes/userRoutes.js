import {hash} from "bcrypt";
import {sign} from "jsonwebtoken";

const express = require('express');
var router = express.Router();
const User = require('../models/User');
const Comment = require('../models/Comment');
const Event = require('../models/Events')
/*
router.post('/user', (req, res) => {
    const user = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }
    User.create(user).then(user => res.json(user))
})*/

router.delete('/user/:id', (req, res) => {
    const id = req.params.id
    User.destroy({where: {id:id}}).then(()=> res.json("user deleted"))
})