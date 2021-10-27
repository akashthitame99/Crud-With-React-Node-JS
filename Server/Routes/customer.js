const { signup } = require("../Controllers/controllers");
const router = require("express").Router();

router.post("/signup", signup);

module.exports = router;
