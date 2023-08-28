const express = require("express");
const transactionController = require("../controllers/transectionController");

const router = express.Router();

router
  .route("/")
  .get(transactionController.getAllTransaction)
  .post(transactionController.createTransaction);

router
  .route("/:id")
  .get(transactionController.getTransactionById)
  .put(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction);

module.exports = router;
