'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'js',
          value: "JS",
          color: "#4eabba",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'vue',
          value: "VUE",
          color: "#4eabba",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'react',
          value: "REACT",
          color: "#4eabba",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'css',
          value: "CSS",
          color: "#4eabba",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'python',
          value: "PYTHON",
          color: "#4eabba",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'postgres',
          value: "POSTGRES",
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
