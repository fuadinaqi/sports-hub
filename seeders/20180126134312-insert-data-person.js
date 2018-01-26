'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [{
      name: 'Ryan',
      location: 'Bekasi',
      email: 'ryanganteng@gmail.com',
      sport_interest: 'futsal',
      phone: '08111111111'
    },{
      name: 'Adhit',
      location: 'Bintaro',
      email: 'adhitkeren@gmail.com',
      sport_interest: 'futsal',
      phone: '08222222222'
    },{
      name: 'Erwin',
      location: 'Pondok Indah',
      email: 'erwinsuper@gmail.com',
      sport_interest: 'futsal',
      phone: '08333333333'
    },{
      name: 'Fadhil',
      location: 'kemang',
      email: 'fadhiluarbyasah@gmail.com',
      sport_interest: 'futsal',
      phone: '084444444444'
    },{
      name: 'Tama',
      location: 'Depok',
      email: 'tamatampan@gmail.com',
      sport_interest: 'futsal',
      phone: '08555555555'
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('People', [{
      name: 'Ryan',
      location: 'Bekasi',
      email: 'ryanganteng@gmail.com',
      sport_interest: 'futsal',
      phone: '08111111111'
    },{
      name: 'Adhit',
      location: 'Bintaro',
      email: 'adhitkeren@gmail.com',
      sport_interest: 'futsal',
      phone: '08222222222'
    },{
      name: 'Erwin',
      location: 'Pondok Indah',
      email: 'erwinsuper@gmail.com',
      sport_interest: 'futsal',
      phone: '08333333333'
    },{
      name: 'Fadhil',
      location: 'kemang',
      email: 'fadhiluarbyasah@gmail.com',
      sport_interest: 'futsal',
      phone: '084444444444'
    },{
      name: 'Tama',
      location: 'Depok',
      email: 'tamatampan@gmail.com',
      sport_interest: 'futsal',
      phone: '08555555555'
    }], {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
