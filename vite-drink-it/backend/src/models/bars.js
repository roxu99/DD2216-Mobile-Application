const Sequelize = require('sequelize')
const db = require('../../../../database')

const userFav = require('./users.js')

const bars = db.define('bars', {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  bar_name: {
    type: Sequelize.STRING(200),
    allowNull: false
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull:false
  },
  latitude:{
    type: Sequelize.FLOAT,
    allowNull:false
  },
  visibility:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  volume: {
    type: Sequelize.INTEGER, //in cL
    allowNull: true //if initially no suggestion
  }, 
  price: {
    type: Sequelize.INTEGER, //in the contry's currency
    allowNull: true //if initially no suggestion
  }
},{createdAt:false,updatedAt:false})

userFav.hasOne(bars,{
  foreingKey: 'userId',
  type: Sequelize.INTEGER,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})

module.exports = bars
