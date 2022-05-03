const express = require('express');
var router = express.Router();
const User = require('../models/User');
const Comment = require('../models/Comment');
const Event = require('../models/Events')

router.post('/event', (req, res) => {
    const event = {
        description: req.body.description,
        name: req.body.name,
        //userId: req.user.id
    }
    Event.create(event).then(post => res.json(event))
})