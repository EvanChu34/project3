const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Items collection and inserts the Items below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const itemSeed = [
  {
    item: "Notebook",
    author: "Evan Chu",
    description:
      "I lost my notebook.",
    location: "New York",
    date: new Date(Date.now())
  },
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
