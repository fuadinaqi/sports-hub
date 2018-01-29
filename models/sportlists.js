'use strict';
module.exports = (sequelize, DataTypes) => {
  var SportLists = sequelize.define('SportLists', {
    name: DataTypes.STRING
  })
  
  return SportLists;
};
