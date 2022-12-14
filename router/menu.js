const express = require("express");
const Menu = require("../models/Menu");

const router = express.Router();
//http://localhost:4000/restaurants/resid
router.get("/:restid", async (req, res) => {
  try {
    const tempid = req.params.restid;
    const response = await Menu.find({ rest_id: tempid });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});
//http://localhost:4000/menu
router.post("/", async (req, res) => {
  try {
    const tempMenu = new Menu({
      rest_id: req.body.rest_id,
      food_id: req.body.food_id,
      food_name: req.body.food_name,
      food_type: req.body.food_type,
      food_category: req.body.food_category,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
    });
    //database operation
    const response = await tempMenu.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});
//http://localhost:4000/menu/update
router.put("/update", async (req, res) => {
  try {
    const tempMenu = {
      rest_id: req.body.rest_id,
      food_id: req.body.food_id,
      food_name: req.body.food_name,
      food_type: req.body.food_type,
      image: req.body.image,
      price: req.body.price,
      food_category: req.body.food_category,
      description: req.body.description,
    };
    const response = await Menu.findOneAndUpdate(
      { food_id: tempMenu.food_id },
      tempMenu,
      { new: true }
    );
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
