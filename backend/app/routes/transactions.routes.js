const { Router } = require('express');

const transactions = require('../controllers/transaction.controller.js');

const router = Router();

module.exports = (app) => {
  // Create a new Transaction
  router.post('/', transactions.create);

  // Update a Transaction with id
  router.put('/:id', transactions.update);

  // Delete a Transaction with id
  router.delete('/:id', transactions.delete);

  // Delete all Transactions
  router.delete('/', transactions.deleteAll);

  // Display  a single Transaction with id
  router.get('/:id', transactions.displayOne);

  // Display all Transactions
  router.get('/', transactions.displayAll);

  // Display cash flow
  router.get('/cashflow', transactions.cashFlow);

  app.use('/api/transactions', router);
};
