const Sequelize = require('sequelize')
const sequelize = require('../config/db')
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
    },

   /* profilePicture: {
        type: Sequelize.TEXT,
        defaultValue: ""
    }*/
});


module.exports = User;