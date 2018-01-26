'use strict';
module.exports = (sequelize, DataTypes) => {
  var PeopleAgendas = sequelize.define('PeopleAgendas', {
    PeopleId: DataTypes.INTEGER,
    AgendaId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PeopleAgendas;
};