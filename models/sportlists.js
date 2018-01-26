'use strict';
module.exports = (sequelize, DataTypes) => {
  var SportLists = sequelize.define('SportLists', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SportLists;
};