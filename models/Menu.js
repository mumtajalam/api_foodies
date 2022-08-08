const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
  rest_id: {
    type: String,
    required: true,
  },
  food_id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  food_name: {
    type: String,
    required: true,
  },
  food_type: {
    type: String,
  },
  food_category: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  food_image: {
    type: String,
  },
});

module.exports = mongoose.model("Menu", MenuSchema);
