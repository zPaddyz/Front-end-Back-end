const Sequelize = require('sequelize')
const sequelize = require('../config/db')
const Comments = sequelize.define("comment", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
});

module.exports = Comments;