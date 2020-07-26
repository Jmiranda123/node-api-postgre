'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      street: "Rua Jose Flores",
      state: "São Paulo",
      address: "Rua Jose Flores 3572",
      country: "Brasil",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      street: "Rua Pires Rocha",
      state: "Rio de Janeiro",
      address: "Rua Pires Rocha 8875",
      country: "Brasil",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
