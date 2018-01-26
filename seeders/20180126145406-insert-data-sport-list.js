'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SportLists', [{
      name: 'futsal'
    }, {
      name: 'basket'
    }, {
      name: 'tennis'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SportLists', [{
      name: 'futsal'
    }, {
      name: 'basket'
    }, {
      name: 'tennis'
    }], {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
