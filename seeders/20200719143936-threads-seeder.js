'use strict'
const faker = require('faker/locale/ru')
faker.locale = 'ru';
var questions = [
  '1. How many days do we have in a week?',
  '2. How many days are there in a normal year?',
  '3. How many colors are there in a rainbow?',
  '4. Which animal is known as the ‘Ship of the Desert?’',
  '5. How many letters are there in the English alphabet?',
  '6. How many consonants are there in the English alphabet?',
  '7. How many sides are there in a triangle?',
  '8. Which month of the year has the least number of days?',
  '9. Which are the vowels in the English alphabet series?',
  '10. Which animal is called King of Jungle?',
  '11. How many primary colors are there?',
  '12. How many days are there in the month of February in a leap year?',
  '13. What do you call a house made of ice?',
  '14. Which is the largest animal in the world?',
  '15. Which is the tallest animal on the earth?',
  '16. Which festival is known as the festival of colors?',
  '17. Which festival is called the festival of light?',
  '18. What is the top color in a rainbow?',
  '19. What type of bird lays the largest eggs?',
  '20. Which festival is known as the ‘Festival of flowers’?',
  '21. In which direction does the sunrise?',
  '22. Which is the world’s largest flower?',
  '23. How many zeros are there in one hundred thousand?',
  '24. How many hours are there in two days?',
  '25. How many months of the year have 31 days?',
  '26. How many weeks are there in one year?',
  '27. Which are the colors in a rainbow?',
  '28. How many bones does an adult human have?',
  '29. Who was the first man to walk on the moon?',
  '30. How many millimeters are there in 1cm?',
  '31. Which is the nearest star to planet earth?',
  '32. Which is the longest river on the earth?',
  '33. Which is the principal source of energy for earth?',
  '34. How many lungs does the human body have?',
  '35. What is the standard taste of the water?',
  '36. Which is the tallest mountain in the world?',
  '37. Which is the fastest animal on the land?',
  '38. Which continent is known as ‘Dark’ continent?',
  '39. Which planet is known as the Red Planet?',
  '40. Which is the most sensitive organ in our body?',
  '41. Which is the largest ocean in the world?',
  '42. Which day is observed as World Environment Day?',
  '43. How many years are there in a century?',
  '44. Which is the largest country in the world?',
  '45. Who invented the Computer?',
  '46. How many players are there in a cricket team?',
  '47. Which day is observed as World Literacy Day?',
  '48. Who is the inventor of Radio?',
  '49. Which place is known as the roof of the world?',
  '50. How many teeth does a healthy adult have including the wisdom teeth?',
  '51. Which gas is most abundant in the earth’s atmosphere?',
  '52. How many people are there in the world?',
  '53. Which is the continent with the most number of countries?',
  '54. Which is the most common non-contagious disease in the world?',
  '55. How many strings does a violin have?',
  '56. How many planets are there in our solar system?',
  '57. Which is the hottest continent on Earth?',
  '58. Which is the smallest continent in the world?',
  '59. How many years are there in a millennium?',
  '60. Which country is home to the kangaroo?',
  '61. Who painted the Mona Lisa?',
  '62. Who invented the telephone?',
  '63. What does the Internet prefix WWW stand for?',
  '64. How much of Earth’s surface is covered by ocean?',
  '65. Who discovered Penicillin in 1928?',
  '66. How many stars are there in the American flag?',
  '67. What do you call a type of shape that has five sides?',
  '68. Which way is anti-clockwise, left or right?',
  '69. How many equal sides does an isosceles triangle have?',
  '70. Which is the coldest location in the earth?',
  '71. Who discovered electricity?',
  '72. Which is the most widely spoken language in the world?',
  '73. Which two parts of the body continue to grow for your entire life?',
  '74. The largest ‘Democracy’ in the world?',
  '75. Who is the inventor of Television?',
  '76. Which is the largest plateau in the world?',
  '77. Which is the instrument used to measure Blood pressure?',
  '78. What color symbolizes peace?',
  '79. Who is the founder of Microsoft?',
  '80. During which year did World War I begin?',
  '81. How many Cricket world cups does India have?',
  '82. Global warming is caused by the excess of which type of gas?',
  '83. How many cards are there in a complete pack of cards?',
  '84. What is the name of the biggest rain forest in the world?',
  '85. Which African nation is famous for chocolate?',
  '86. What makes up (approx.) 80% of our brain’s volume?',
  '87. Which instrument is used for measuring wind speed?',
  '88. ‘Stars and Stripes’ is the nickname of the flag of which country?',
  '89. Which language is used by the computer to process data?',
  '90. What covers approximately 71% of the Earth’s surface: Land or water?',
  '91. Which is the hardest substance available on earth?',
  '92. Which is the biggest desert in the world?',
  '93. Which country gifted The Statue of Liberty to the United States?',
  '94. What is the name of the Greek God of music?',
  '95. What does the “SIM” in the SIM card stand for?',
  '96. Which is the first element on the periodic table of elements?',
  '97. Which is the longest written Constitution in the world?',
  '98. What is the largest joint in the human body?',
  '99. Which is the smallest bone in the human body?',
  '100. Which instrument is used to measure Atmospheric Pressure?'
]

var answers = [
  'Answer: Seven',
  'Answer: 365 (not a leap year)',
  'Answer: 7',
  'Answer: Camel',
  'Answer: 26',
  'Answer: 21',
  'Answer: Three',
  'Answer: February',
  'Answer: A, E, I, O, U',
  'Answer: Lion',
  'Answer: Three (red, yellow, blue)',
  'Answer: 29 days',
  'Answer: Igloo',
  'Answer: Blue whale',
  'Answer: Giraffe',
  'Answer: Holi',
  'Answer: Diwali',
  'Answer: Red',
  'Answer: Ostrich',
  'Answers: Onam',
  'Answer: East',
  'Answer: Rafflesia',
  'Answer: Five',
  'Answer: 48 hours (24+24)',
  'Answer: 7 (January, March, May, July, August, October and December)',
  'Answer: 52',
  'Answer: Violet, Indigo, Blue, Green, Yellow, Orange, Red',
  'Answer: 206',
  'Answer: Neil Armstrong',
  'Answer: 10',
  'Answer: Sun',
  'Answer: Nile',
  'Answer: Sun',
  'Answer: Two',
  'Answer: Water is tasteless',
  'Answer: Mount Everest',
  'Answer: Cheetah',
  'Answer: Africa',
  'Answer: Mars',
  'Answer: Skin',
  'Answer: Pacific Ocean',
  'Answer: June 5',
  'Answer: One Hundred',
  'Answer: Russia (By area)',
  'Answer: Charles Babbage',
  'Answer: 11',
  'Answer: September 8',
  'Answer: Marconi',
  'Answer: Tibet',
  'Answer: 32',
  'Answer: Nitrogen',
  'Answer: Over 7 billion',
  'Answer: Africa',
  'Answer: Tooth Decay',
  'Answer: Four',
  'Answer: 8',
  'Answer: Africa',
  'Answer: Australia',
  'Answer: 1000',
  'Answer: Australia',
  'Answer: Leonardo da Vinci',
  'Answer: Alexander Graham Bell',
  'Answer: World Wide Web',
  'Answer: 71%',
  'Answer: Alexander Fleming',
  'Answer: 50',
  'Answer: Pentagon',
  'Answer: Left',
  'Answer: 2',
  'Answer: East Antarctica',
  'Answer: Benjamin Franklin',
  'Answer: Mandarin (Chinese)',
  'Answer: Nose and Ears',
  'Answer: India',
  'Answer: John Logie Baird',
  'Answer: Tibetan Plateau',
  'Answer: Sphygmomanometer',
  'Answer: White',
  'Answer: Bill Gates',
  'Answer: 1914',
  'Answer: 2',
  'Answer: Carbon dioxide',
  'Answer: 52',
  'Answer: The Amazon',
  'Answer: Ghana',
  'Answer: Water',
  'Answer: Anemometer',
  'Answer: United States of America',
  'Answer: Binary language',
  'Answer: Water',
  'Answer: Diamond',
  'Answer: Sahara desert',
  'Answer: France',
  'Answer: Apollo',
  'Answer: Subscriber Identity Module',
  'Answer: Hydrogen',
  'Answer: India',
  'Answer: Knee',
  'Answer: Stapes (Ear bone)',
  'Answer: Barometer'
]

people = [ 5, 6, 2, 7, 5, 3, 3, 3, 3, 1, 2, 9, 4, 2, 4, 4, 2, 6, 2, 5, 6, 1, 8, 5, 4, 7, 2, 1, 6, 7, 4, 1, 3, 4, 5, 8, 5, 7, 4, 3, 8, 5, 3, 9, 8, 3, 2, 5, 6, 4, 4, 1, 7, 4, 8, 9, 4, 4, 6, 5, 4, 1, 9, 3, 3, 5, 3, 7, 9, 1, 5, 7, 5, 4, 7, 9, 3, 6, 9, 4, 8, 9, 7, 1, 4, 5, 4, 4, 7, 1, 8, 4, 8, 9, 2, 9,
  4, 6, 4, 7, 5, 6, 2, 7, 5, 3, 3, 3, 3, 1, 2, 9, 4, 2, 4, 4, 2, 6, 2, 5, 6, 1, 8, 5, 4, 7, 2, 1, 6, 7, 4, 1, 3, 4, 5, 8, 5, 7, 4, 3, 8, 5, 3, 9, 8, 3, 2, 5, 6, 4, 4, 1, 7, 4, 8, 9, 4, 4, 6, 5, 4, 1, 9, 3, 3, 5, 3, 7, 9, 1, 5, 7, 5, 4, 7, 9, 3, 6, 9, 4, 8, 9, 7, 1, 4, 5, 4, 4, 7, 1, 8, 4, 8, 9, 2, 9,
5, 6, 2, 7, 5, 3, 3, 3, 3, 1, 2, 9, 4, 2, 4, 4, 2, 6, 2, 5, 6, 1, 8, 5, 4, 7, 2, 1, 6, 7, 4, 1, 3, 4, 5, 8, 5, 7, 4, 3, 8, 5, 3, 9, 8, 3, 2, 5, 6, 4, 4, 1, 7, 4, 8, 9, 4, 4, 6, 5, 4, 1, 9, 3, 3, 5, 3, 7, 9, 1, 5, 7, 5, 4, 7, 9, 3, 6, 9, 4, 8, 9, 7, 1, 4, 5, 4, 4, 7, 1, 8, 4, 8, 9, 2, 9]
module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.bulkInsert('Posts',
      // create an arrayL length 50
      Array.from({ length: 100 }).map((d, index) =>
        ({
          content: "<p>" + answers[index] + "</p>",
          plainText: answers[index],
          postNumber: 0,
          replyingToUsername: null,
          removed: false,
          UserId: people[index],
          ThreadId: index + 1,
          replyId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          CategoryId: faker.random.number({ min: 1, max: 5 }),
          viewCounts: 0
        })
      ), {});


    return queryInterface.bulkInsert('Threads',
      // create an arrayL length 50
      Array.from({ length: 50 }).map((d, index) =>
        ({
          name: questions[index],
          UserId: people[index],
          slug: urlSlug(questions[index].toString().toLowerCase() || '') || '_',
          postsCount: 1,
          locked: false,
          CategoryId: faker.random.number({ min: 1, max: 5 }),
          PollQuestionId: null,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      ), {});

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Posts', null, {})
    return queryInterface.bulkDelete('Threads', null, {})
  }
}
