const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct
} = require("../controllers/productController");
const router = express.Router();
const { valtidateJWt } = require("../middleware/jwt");

router.post("/create", valtidateJWt, createProduct);
router.get("/getProducts", valtidateJWt, getProducts);
router.get("/getProductById/:id", valtidateJWt, getProductById);
router.delete("/deleteProduct/:id", valtidateJWt, deleteProduct);

module.exports = router;
