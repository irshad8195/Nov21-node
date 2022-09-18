const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/userController");
const { valtidateJWt } = require("../middleware/jwt");

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
