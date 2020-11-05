'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Ips',
      [
        {
          ip: '::ffff:127.0.0.1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ip: '::ffff:127.0.0.1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ips', null, {})
  }
}
