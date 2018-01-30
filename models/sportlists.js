'use strict';
module.exports = (sequelize, DataTypes) => {
  var SportLists = sequelize.define('SportLists', {
    name: {
      type      : DataTypes.STRING,
      isAlpha   : {msg: `should be filled with letter`},
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`Sport should be filled`)
          } else {
            next()
          }
        }
      }
    }
  })
  SportLists.associate = function (models) {
    // ...associate the models
    SportLists.hasMany(models.Agenda)
  };
  return SportLists;
};
