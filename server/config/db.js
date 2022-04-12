const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS, {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    port: 3306
});

module.exports = sequelize