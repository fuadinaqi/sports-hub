'use strict';
module.exports = (sequelize, DataTypes) => {
  var Agenda = sequelize.define('Agenda', {
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    max_player: DataTypes.INTEGER,
    SportListId: DataTypes.INTEGER
  })
  Agenda.associate = function (models) {
    // ...associate the models
    Agenda.belongsTo(models.SportLists)
    // Agenda.belongsToMany(models.Person, {through: 'peopleagendas'});

  };
  return Agenda;
};
