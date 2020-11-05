'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          picture: null,
          color: "#048e42",
          hash: "$2a$12$eVAfvYpFa5j2Wb3X5EJnZu8Xe/HxhGFfpTyhSK6CZX5ASEVgdO87q",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user1',
          picture: null,
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
