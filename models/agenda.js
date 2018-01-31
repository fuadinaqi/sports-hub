'use strict';
const moment      = require('moment');
moment.locale('en-gb')
const recentTime  = moment().format('LT')
const today       = moment().format('L');//get today's date
let arrToday      = today.split('/') //arrange date format
const thisDay     = arrToday.reverse().join('-')//arrange date format


module.exports = (sequelize, DataTypes) => {
  var Agenda = sequelize.define('Agenda', {
    name: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
        //   if(value.length == 0) {
        //     throw new Error (`Name should be filled`)
        //   }
          if(value.length == 0) {
            next(`Name column should be filled`)
          } else {
            next()
          }
        }
      }
    },
    place: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`Place column should be filled`)
          } else {
            next()
          }
        }
      }
    },
    date: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`Date column should be filled`)
          } else {
              next()
            }
          }
        }
    },
    time: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`Time column should be filled`)
          } else {
            next()
          }
        },
        isUpdate : function(value, next) {
          if( value < recentTime && this.date == thisDay) {
            next(`Time should be up to date`)
          } else {
            next()
          }
        }
      }
    },
    max_player: {
      type      : DataTypes.INTEGER,
      validate  : {
        isAlphanumeric  : {
          msg: 'Player should be filled with number'
        },
        max : {args: [50], msg: 'Maximum player is 50'},
        isNull(value, next) {
          if(value.lengh == 0) {
            next(`Max Player column should be filled`)
          } else {
            next()
          }
        }
      }
    },
    SportListId: DataTypes.INTEGER,
    hostId: DataTypes.INTEGER
  })
  Agenda.associate = function (models) {
    Agenda.belongsTo(models.SportLists)
    Agenda.belongsToMany(models.Person, {through: 'PeopleAgendas'});
    // Agenda.hasMany(models.PeopleAgendas)
    // Agenda.hasMany(models.PeopleAgendas)
  };
  return Agenda;
};
