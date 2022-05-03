const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Event = require('./Events')
const Comment = require('./Comments')
const User = sequelize.define("user", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'email',
        validate: {
            isEmail: { 
                msg: "Not an email"
            },
        }
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }

   /* profilePicture: {
        type: Sequelize.TEXT,
        defaultValue: ""
    }*/
});

User.hasMany(Event, {onDelete: 'CASCADE'})
User.hasMany(Comment, {onDelete: 'CASCADE'})

Event.hasMany(Comment, {onDelete: 'CASCADE'})

Comment.belongsTo(User)
Comment.belongsTo(Event)


Event.belongsTo(User, {as: 'eventHolder', foreignKey: "userId"})



module.exports = User;