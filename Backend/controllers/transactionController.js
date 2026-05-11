const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Category = require("../models/Category");
const Transaction = require("../models/Transaction");

//! User Registration
const transactionController = {
  //! Create transaction
  create: asyncHandler(async (req, res) => {
    const { type, category, amount, date, description } = req.body;

    if (!amount || !date || !type) {
      throw new Error("The Date , amount and type are required");
    }
    // ! create

    const transaction = await Transaction.create({
      user: req.id,
      type,
      category,
      amount,
      date,
      description,
    });

    res.status(201).json({
      message: "Success",
      data: {
        transaction,
      },
    });
  }),

  //! List

  // list: asyncHandler(async (req, res) => {
  //   const transactions = await Transaction.find({
  //     user: req.id,
  //   });

  //   res.status(200).json({
  //     message: "Success",
  //     body: {
  //       transactions,
  //     },
  //   });
  // }),

  // ! Filter the Transactions
  getFilteredTransactions: asyncHandler(async (req, res) => {
    const { startDate, endDate, category, type } = req.query;

    const filters = { user: req.id };

    if (startDate) {
      filters.date = { ...filters.date, $gte: new Date(startDate) };
    }
    if (endDate) {
      filters.date = { ...filters.date, $lte: new Date(endDate) };
    }
    if (type) {
      filters.type = type;
    }

    if (category) {
      filters.category = category;
    }

    const transactions = await Transaction.find(filters).sort({ date: -1 });

    res.json({
      message: "success",
      transactions,
    });
  }),

  //! Update

  update: asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id);

    // Transaction not found
    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not found");
    }

    // Unauthorized user
    if (transaction.user.toString() !== req.id.toString()) {
      res.status(403);
      throw new Error("Not authorized to update this transaction");
    }

    transaction.type = req.body.type || transaction.type;
    transaction.description = req.body.description || transaction.description;
    transaction.amount = req.body.amount || transaction.amount;
    transaction.category = req.body.category || transaction.category;

    const updatedTransaction = await transaction.save();

    res.status(200).json({
      message: "Success",
      updatedTransaction,
    });
  }),

  // ! delete

  delete: asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id);

    // Transaction not found
    if (!transaction) {
      res.status(404);
      throw new Error("Transaction not found");
    }

    // Unauthorized user
    if (transaction.user.toString() !== req.id.toString()) {
      res.status(403);
      throw new Error("Not authorized to delete this transaction");
    }
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({
      message: "The transaction deleted Successfully",
    });
  }),
};

module.exports = transactionController;
