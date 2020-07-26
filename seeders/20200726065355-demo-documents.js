'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Documents', [{
      documentNumber: "01234",
      documentType: "Contrato",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      documentNumber: "56789",
      documentType: "Contrato",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Documents', null, {});
  }
};
