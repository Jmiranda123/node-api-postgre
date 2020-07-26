'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Farmers', [{
      name: "Joaquin Silva",
      documentId: 1,
      addressId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Francisco da Rocha",
      documentId: 2,
      addressId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Farmers', null, {});
  }
};
