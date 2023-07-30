const { Schema } = require('mongoose');


const drinkSchema = new Schema({
  drinkId: {
    type: String,
    required: true,
  },
  drinkName: {
    type: String,
    required: true,
  },
  drinkDescription: {
    type: String,
    required: true,
  },
  drinkInstructions: {
    type: String,
    required: true,
  },
  drinkIngredients: {
    type: String,
    required: true,
  },
  drinkImage: {
    type: String,
    required: true,
  },
  drinkGlass: {
    type: String,
    required: true,
  },
  drinkCategory: {
    type: String,
    required: true,
  },
});

module.exports = drinkSchema;
