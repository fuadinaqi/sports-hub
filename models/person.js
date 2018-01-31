'use strict';
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    name: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            throw new Error(`Name should be filled`)
            // next(`Name should be filled`)
          } else {
            next()
          }
        }
      }
    },
    location: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`Location should be filled`)
          } else {
            next()
          }
        }
      }
    },
    email: {
      type      : DataTypes.STRING,
      isEmail   : {msg: `email column should be email format`},
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`email should be filled`)
          } else {
            next()
          }
        }
      }
    },
    sport_interest: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`sport interest should be filled`)
          } else {
            next()
          }
        }
      }
    },
    phone: {
      type      : DataTypes.STRING,
      validate  : {
        isAlphanumeric   : {msg: `phone should be filled with number`},
        isNull(value, next) {
          if(value.length == 0) {
            next(`Phone should be filled`)
          } else {
            next()
          }
        }
      }
    },
    password: DataTypes.STRING
  })
  Person.associate = function (models) {
    Person.belongsToMany(models.Agenda, {through: 'PeopleAgendas'});
    // Person.hasMany(models.PeopleAgendas)
  };

  Person.beforeCreate(dataPerson => {
    const saltRounds = 10;
    const myPlaintextPassword = dataPerson.password;
    return bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
      // Store hash in your password DB.
      dataPerson.password = hash
    });
  })



  return Person;
};
