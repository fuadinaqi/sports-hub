'use strict';
module.exports = (sequelize, DataTypes) => {
  var PeopleAgendas = sequelize.define('PeopleAgendas', {
    PersonId: DataTypes.INTEGER,
    AgendaId: DataTypes.INTEGER
  })
  PeopleAgendas.associate = function (models) {
    PeopleAgendas.belongsTo(models.Person)
    PeopleAgendas.belongsTo(models.Agenda)
  };
  return PeopleAgendas;
};
