'use strict';
module.exports = (sequelize, DataTypes) => {
  var SportLists = sequelize.define('SportLists', {
    name: DataTypes.STRING
  })
  SportLists.associate = function (models) {
    // ...associate the models
    SportLists.hasMany(models.Agenda)
  };
  return SportLists;
};
