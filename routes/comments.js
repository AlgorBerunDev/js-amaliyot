var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("comments/index");
});

module.exports = router;
