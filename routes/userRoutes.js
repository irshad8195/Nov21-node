const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/userController");
//const { valtidateJWt } = require("../middleware/jwt");

router.post("/signup", signup);
router.post("/signin", signin);
console.log("signinRoute")

module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { signup, signin } = require("../controllers/userController");
// const { valtidateJWt } = require("../middleware/jwt");

// router.post("/signup", signup);
// router.post("/signin", signin);

// //router.post("/test", valtidateJWt)

// module.exports = router;
