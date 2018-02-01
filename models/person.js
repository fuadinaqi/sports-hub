'use strict';
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    name: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`Name should be filled`)
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
      validate  : {
        isEmail   : {msg: `Column should be email format`},
        isNull(value, next) {
          if(value.length == 0) {
            next(`Email should be filled`)
          } else {
            next()
          }
        },
        isUnique(value, next) {
         Person.findAll({
           where:
             {
               email: this.email.toLowerCase(),
               id: { [sequelize.Op.ne]: this.id }
             }
         })
         .then(function (result) {
           if (result == null || result.length == 0) {
             return next()
           } else {
             return next(`${result[0].email} sudah terdaftar`)
           }
         })
        }
      }
    },
    sport_interest: {
      type      : DataTypes.STRING,
      validate  : {
        isNull(value, next) {
          if(value.length == 0) {
            next(`Sport interest should be filled`)
          } else {
            next()
          }
        }
      }
    },
    phone: {
      type      : DataTypes.STRING,
      validate  : {
        isAlphanumeric   : {msg: `should be filled with number`},
        isNull(value, next) {
          if(value.length == 0) {
            next(`Phone should be filled`)
          } else {
            next()
          }
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len: {args : [8,25], msg: "Password should be at minimum 8 character and maximum 25 character"}
      }
    }
  })
  Person.associate = function (models) {
    Person.belongsToMany(models.Agenda, {through: 'PeopleAgendas'});
    // Person.hasMany(models.PeopleAgendas)
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
