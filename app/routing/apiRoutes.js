module.exports = (app) => {
  let friends = require("../data/friends.js");

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });

  app.post("/api/new", (req, res) => {
    let bestFriend = {};
    let bestScore = 100;
    let user = req.body;

    friends.forEach(friend => {
      let score = 0;

      for (var i = 0; i < user.answers.length; i++) {
        user.answers[i] = parseInt(user.answers[i]);
        score += Math.abs(user.answers[i] - friend.answers[i]);
      }

      if (score < bestScore) {
        bestScore = score;
        bestFriend = friend;
      }
    });

    friends.push(user);

    res.json(bestFriend);
  });
};
