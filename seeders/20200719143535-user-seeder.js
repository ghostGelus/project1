'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          picture: "https://cdn.pixabay.com/photo/2015/07/21/20/28/dog-854385_1280.jpg",
          color: "#048e42",
          hash: "$2a$12$eVAfvYpFa5j2Wb3X5EJnZu8Xe/HxhGFfpTyhSK6CZX5ASEVgdO87q",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user1',
          picture: "https://www.nastol.com.ua/download.php?img=201106/1680x1050/nastol.com.ua-3477.jpg",
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user2',
          picture: "https://pbs.twimg.com/media/DHcYXIHUQAA9eWG.jpg",
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user3',
          picture: "https://images.wallpaperscraft.com/image/dog_glasses_tongue_hanging_out_143613_2560x1600.jpg",
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        ,{
          username: 'user4',
          picture: "https://i.ytimg.com/vi/-yTz3IasQeQ/maxresdefault.jpg",
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user5',
          picture: "https://i.pinimg.com/736x/89/26/c6/8926c6fe4ac707e06e322910874e11a8--smarty-pants-funny-dogs.jpg",
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user6',
          picture: "https://ae01.alicdn.com/kf/HTB1HKlNpb_I8KJjy1Xaq6zsxpXaV/Full-Square-Round-Drill-5D-DIY-Diamond-Painting-chihuahua-dog-3D-Embroidery-Cross-Stitch-Mosaic-Rhinestone.jpg",
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user7',
          picture: null,
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user8',
          picture: "http://www.dogica.com/dogpuppy/pup/dog-glasses-doggles58.jpg",
          color: "#74f7a6",
          hash: "$2a$12$YJljbP.JK7SheMKmPIehjuIWrqw88zjXyJrJSps7qDdS1WoWJfYSa",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'user9',
          picture: "https://yt3.ggpht.com/a/AATXAJwbErhRsuhFfeiawERZg-uQLQ42BXvFfkgsKg=s900-c-k-c0xffffffff-no-rj-mo",
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
