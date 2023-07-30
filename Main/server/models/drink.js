const { Schema, model } = require('mongoose');


const drinkSchema = new Schema(
  {
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
  drinkCategory: {
    type: String,
    required: true,
  },
});

drinkSchema.virtual('drinkCount').get(function () {
  return this.savedDrinks.length;
});

const drink = model('Drink', drinkSchema);

module.exports = drink;
