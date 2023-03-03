const Sequelize = require('sequelize')
const db = require('../../../../database')

const users = db.define('users', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING(100),
    unique: true,
    allowNull: false
  },
//   name: {
//     type: Sequelize.STRING(100),
//     allowNull: false
//   },
//   firstname: {
//     type: Sequelize.STRING(100),
//     allowNull:false
//   },
  pwd:{
    type: Sequelize.STRING(100),
    allowNull:false
  },
  role:{
    type: Sequelize.INTEGER,
    allowNull:false,
  }
},{createdAt:false,updatedAt:false})
module.exports = users
