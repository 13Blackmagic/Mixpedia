const { Schema, model } = require('mongoose');

// 
const drinkSchema = new Schema(
  {
  idDrink: {
    type: String,
    required: true,
  },
  strDrink: {
    type: String,
    required: true,
  },
  strGlass: {
    type: String,
    required: true,
  },
  strInstructions: {
    type: String,
    required: true,
  },
  strIngredients1: {
    type: String,
    required: false,
  },
  strIngredients2: {
    type: String,
    required: false,
  },
  strIngredients3: {
    type: String,
    required: false,
  },
  strIngredients4: {
    type: String,
    required: false,
  },
  strIngredients5: {
    type: String,
    required: false,
  },
  strIngredients6: {
    type: String,
    required: false,
  },
  strIngredients7: {
    type: String,
    required: false,
  },
  strMeasure1: {
    type: String,
    required: false,
  },
  strMeasure2: {
    type: String,
    required: false,
  },
  strMeasure3: {
    type: String,
    required: false,
  },
  strMeasure4: {
    type: String,
    required: false,
  },
  strMeasure5: {
    type: String,
    required: false,
  },
  strMeasure6: {
    type: String,
    required: false,
  },
  strMeasure7: {
    type: String,
    required: false,
  },
  strDrinkThumb: {
    type: String,
    required: true,
  },
  strCategory: {
    type: String,
    required: true,
  },
});

drinkSchema.virtual('drinkCount').get(function () {
  return this.savedDrinks.length;
});

const Drink = model('Drink', drinkSchema);

module.exports = Drink;
