const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.body.name });
    if (category) {
      return res.status(400).json({ message: "Category already exists" });
    }
    await Category.create(req.body);
    return res.status(200).json({ message: "Category created successfully" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({
      isActive: true,
    });
    if (categories.length == 0) {
      return res.status(400).json({ message: "No categories found" });
    }
    return res.status(200).json({ categories: categories });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err, message: "Internal Server Error" });
  }
};

