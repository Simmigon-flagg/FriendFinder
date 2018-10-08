var friends = require("../data/friends");

module.exports = function (app) {


  //Select all friends
  app.get("/api/friends", function (req, res) {

    res.json(friends);

  });
  //
  app.post("/api/friends", function (req, res) {

    // var score = req.body.scores;
   
    var minTotalDifference = 51;
    var newFriendsum = 0;
    var trackFriend = -1;
    
    for (var i = 0; i < req.body.scores.length; i++) {
      var s = parseInt(req.body.scores[i]); 
      console.log(req.body.scores[i] = s);
      newFriendsum = add(newFriendsum, s);
    }
    console.log("\n");

    // console.log(`New Friend Sum ${newFriendsum}`);
    // console.log(typeof (newFriendsum));


    for (var i = 0; i < friends.length; i++) {
      // var friendreducer = friends[i].scores.reduce(add, 0);
      var eachFriendsScore = 0;

      // console.log(`Hi ${friends[i].name}, Are we friends?`)

      for (var j = 0; j < friends[i].scores.length; j++) {
        var s = parseInt(friends[i].scores[j]);
        eachFriendsScore = add(eachFriendsScore, s);

        var abstemp = eachFriendsScore - newFriendsum;
        abstemp = Math.abs(abstemp);

      }
      // console.log(`Each friend score ${eachFriendsScore} new friend score ${newFriendsum}`)

      if (abstemp < minTotalDifference) {
        minTotalDifference = abstemp;
        trackFriend = i;

      }
      // console.log(`My friend is ${friends[trackFriend].name}`);
      // console.log("\n");
    }

    // console.log(`${req.body.name}'s new friend is ${friends[trackFriend].name}. With a score differernce of ${minTotalDifference}`);
    // console.log(`Send data for friend ${friends[trackFriend].photo}`);


    friends.push(req.body);
    res.json(friends[trackFriend]);


  });

};



function add(a, b) {
  return a + b;

}