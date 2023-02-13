var express = require("express");
var router = express.Router();

const users = [
  {
    id: 1,
    firstName: "John Doe",
    lastName: "Smith",
  },
];

router.get("/", function (req, res, next) {
  res.render("users/index", { users });
});

router.post("/", function (req, res, next) {
  users.push({ ...req.body, id: users.length + 1 });

  res.json(users);
});

module.exports = router;
