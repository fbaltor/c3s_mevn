module.exports = (app) => {
  const transactions = require("../controllers/transaction.controller.js");

  var router = require("express").Router();

  // Create a new Transaction
  router.post("/", transactions.create);

  // Update a Transaction with id
  router.put("/:id", transactions.update);

  // Delete a Transaction with id
  router.delete("/:id", transactions.delete);

  // Delete all Transactions
  router.delete("/", transactions.deleteAll);

  // Display  a single Transaction with id
  router.get("/:id", transactions.displayOne);

  // Display all Transactions
  router.get("/", transactions.displayAll);

  // Display cash flow
  router.get("/", transactions.cashFlow);

  app.use("/api/transactions", router);
};
