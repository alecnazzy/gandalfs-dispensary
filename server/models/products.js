const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    reguired: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  image: {
    reguired: true,
    type: String,
  },
});

module.exports = mongoose.model("Products", productsSchema);
