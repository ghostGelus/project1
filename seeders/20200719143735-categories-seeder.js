'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'travel',
          value: "TRAVEL",
          color: "#4eabba",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'music',
          value: "MUSIC",
          color: "#4eabba",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  }
}
