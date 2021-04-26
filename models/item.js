const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  item: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    lat: {
      type: Number
    },
    lng: {
      type: Number
    }
  },
  status:{type: String},
  date: { type: Date, default: Date.now }
});

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
