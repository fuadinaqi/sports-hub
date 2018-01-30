'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Agendas', [{
      name: 'futsal hacktiv8',
      place: 'gelora bung karno',
      date: '2018-27-01',
      time: '13.30',
      max_player: 24,
      SportId: 1
    },{
      name: 'basket ku basket mu',
      place: 'senayan',
      date: '2018-28-01',
      time: '00.00',
      max_player: 12,
      SportId: 2
    },{
      name: 'tennis takraw kuy',
      place: 'senayan',
      date: '2018-27-01',
      time: '23.00',
      max_player: 2,
      SportId: 3
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Agendas', [{
      name: 'futsal hacktiv8',
      place: 'gelora bung karno',
      date: '2018-27-01',
      time: '13.30',
      max_player: 24,
      SportId: 1
    },{
      name: 'basket ku basket mu',
      place: 'senayan',
      date: '2018-28-01',
      time: '00.00',
      max_player: 12,
      SportId: 2
    },{
      name: 'tennis takraw kuy',
      place: 'senayan',
      date: '2018-27-01',
      time: '23.00',
      max_player: 2,
      SportId: 3
    }], {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
