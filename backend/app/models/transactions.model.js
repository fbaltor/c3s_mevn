module.exports = (mongoose) => {
  // Defining documents structure, aka schema
  var schema = mongoose.Schema(
    {
      value: String,
      origin: String,
      kind: String,
      date: String,
    },
    { timestamps: true } // keep track of creation/updating time
  );

  // Method allowing for compatibility with some front-end frameworks
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // (?) Creating an instance of the schema, aka model
  const Transaction = mongoose.model("transaction", schema);
  return Transaction;
};
