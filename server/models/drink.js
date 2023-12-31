const { Schema, model } = require('mongoose');


const drinkSchema = new Schema(
  {
  idDrink: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  glass:{
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  instructions: {
    type: String,
    required: false,
  }
});


drinkSchema.virtual('drinkCount').get(function () {
  return this.savedDrinks.length;
});

const Drink = model('Drink', drinkSchema);

module.exports = Drink;
