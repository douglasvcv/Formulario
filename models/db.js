require('dotenv').config()

//connect with database
const Sequelize = require('sequelize')
const sequelize = new Sequelize('okok', 'root', process.env.MYSQLPASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    sequelize : sequelize,
    Sequelize : Sequelize
}