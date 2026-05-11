const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Category = require("../models/Category");
const Transaction = require("../models/Transaction");
//! User Registration
const categoryController = {
  //! Create
  create: asyncHandler(async (req, res) => {
    const { name, type } = req.body;

    if (!name || !type) {
      throw new Error("Need name and type to create category");
    }

    const normalizeName = name.toLowerCase();

    const validTypes = ["income", "expense"];

    if (!validTypes.includes(type.toLowerCase())) {
      throw new Error("The type is invalid");
    }

    // ! check is category is exists

    const isCategoryExist = await Category.findOne({
      name: normalizeName,
      user: req.id,
    });

    if (isCategoryExist) {
      throw new Error(
        `The Category ${normalizeName} is already exist in database`,
      );
    }

    // ! create Category
    const category = await Category.create({
      name: normalizeName,
      user: req.id,
      type: type,
    });

    res.status(201).json({
      message: "The Category Created successfully",
      data: {
        category,
      },
    });
  }),

  //! List

  list: asyncHandler(async (req, res) => {
    const categories = await Category.find({
      user: req.id,
    });

    res.status(200).json({
      message: "Success",
      body: {
        categories,
      },
    });
  }),

  //! Update

  update: asyncHandler(async (req, res) => {
    const { name, type } = req.body;

    // Find category
    const category = await Category.findById(req.params.id);

    if (!category) {
      res.status(404);
      throw new Error("Category not found");
    }

    // Check ownership
    if (category.user.toString() !== req.id.toString()) {
      res.status(403);
      throw new Error("You are not authorized to update this category");
    }

    // Store old values
    const oldName = category.name;
    const oldType = category.type;

    // Update category fields
    category.name = name ?? category.name;
    category.type = type ?? category.type;

    // Save updated category
    const updatedCategory = await category.save();

    // Update transactions if category name or type changed
    if (oldName !== updatedCategory.name || oldType !== updatedCategory.type) {
      await Transaction.updateMany(
        {
          user: req.id,
          category: oldName,
        },
        {
          $set: {
            category: updatedCategory.name,
            type: updatedCategory.type,
          },
        },
      );
    }

    res.status(200).json({
      message: "Category updated successfully",
      data: updatedCategory,
    });
  }),

  // ! delete
  delete: asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404);
      throw new Error("The Category is not found");
    }
    if (category.user.toString() !== req.id.toString()) {
      res.status(403);
      throw new Error("you are not authorized to delete this category");
    }

    const defaultCategory = "Uncategorized";
    const updatedTransaction = await Transaction.updateMany(
      {
        user: req.id,
        category: category.name,
      },
      {
        $set: { category: defaultCategory },
      },
    );
    await Category.findByIdAndDelete(req.params.id);
    res.json({
      message: "Category is deleted successfully",
    });
  }),
};

module.exports = categoryController;
