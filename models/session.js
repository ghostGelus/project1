'use strict'
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    'Session',
    {
      sid: DataTypes.STRING,
      expires: DataTypes.DATE,
      data: DataTypes.TEXT
    },
    {}
  )
  Session.associate = function(models) {
    // associations can be defined here
  
  }
  return Session
}
