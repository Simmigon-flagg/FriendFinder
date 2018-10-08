// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [

  {
    "name": "Tina",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      1,
      2,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],

  },


  {
    "name": "Marky Mark",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      1,
      1,
      4,
      1,
      5,
      1,
      2,
      3,
      4,
      1
    ]

  },

  {
    "name": "Steve Rogers",
    "photo": "https://media0.giphy.com/media/1lk1IcVgqPLkA/200_s.gif",
    "scores": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],

  },

  {
    "name": "Mac Lovin",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ],

  }


];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;