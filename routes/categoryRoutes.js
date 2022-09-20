const express = require("express");
const router = express.Router();
const { valtidateJWt } = require("../middleware/jwt");
const {
  createCategory, getCategories
} = require("../controllers/categoriesController");

router.post("/createCategory", valtidateJWt, createCategory);
router.get("/getCategories", valtidateJWt, getCategories);

module.exports = router;
