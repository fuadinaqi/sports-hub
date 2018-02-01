'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Agendas','availability',Sequelize.BOOLEAN);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Agendas','availability',Sequelize.BOOLEAN);
  }
};
