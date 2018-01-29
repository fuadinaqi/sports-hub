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

  return Agenda;
};
