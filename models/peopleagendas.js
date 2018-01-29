'use strict';
module.exports = (sequelize, DataTypes) => {
  var PeopleAgendas = sequelize.define('PeopleAgendas', {
    PeopleId: DataTypes.INTEGER,
    AgendaId: DataTypes.INTEGER
  })
  
  return PeopleAgendas;
};
