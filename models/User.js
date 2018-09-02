const {sequelize, Sequelize} = require('../config/db')

const User = sequelize.define('crud1', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
  }, {
    freezeTableName: true
})

module.exports = User