const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/api/friends", (req, res) => {
  let friends = require("../data/friends.js");

  res.json(friends);
});

module.exports = router;
