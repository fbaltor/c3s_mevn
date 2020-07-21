const db = require("../models");
const Transaction = db.transactions;

// Create and Save a new transaction
exports.create = (req, res) => {
  // Validation
  if (!req.body.value) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }

  // Creating new transaction instance
  const transaction = new Transaction({
    value: req.body.value,
    origin: req.body.origin,
    kind: req.body.kind,
    date: req.body.date,
  });

  // Saving in the database
  transaction
    .save(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error while saving at database",
      });
    });
};

exports.update = (req, res) => {
  // Validation
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }

  const id = req.params.id;

  Transaction.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot update Transaction with id=${id}`,
        });
      } else res.send({ message: "Transaction was updated successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Transaction with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Transaction.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `cannot delete Transaction with id=${id}`,
        });
      } else {
        res.send({
          message: "Transaction was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "could not delete Transaction with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Transaction.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Transactions were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occurred while removing all Transactions",
      });
    });
};

exports.displayOne = (req, res) => {
  const id = req.params.id;

  Transaction.findById(id)
    .then((data) => {
      if (!data)
        res
          .status(404)
          .send({ message: "not found Transaction with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error retrieving Transaction with id=" + id });
    });
};

exports.displayAll = (req, res) => {
  Transaction.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occurred while retrieving transactions",
      });
    });
};

exports.cashFlow = (req, res) => {
  Transaction.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occurred while displaying cash flow",
      });
    });
};
