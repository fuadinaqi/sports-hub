'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    sport_interest: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  })

  return Person;
};
