const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  updateQuantity
} = require("../controllers/productController");

const router = express.Router();
const { valtidateJWt } = require("../middleware/jwt");

router.post("/create", valtidateJWt, createProduct);
router.get("/getProducts", valtidateJWt, getProducts);
router.get("/getProductById/:id", valtidateJWt, getProductById);
router.delete("/deleteProduct/:id", valtidateJWt, deleteProduct);
router.put("/updateProduct/:id", valtidateJWt, updateProduct);
router.put("/updateQuantity/:id", valtidateJWt, updateQuantity);

module.exports = router;
