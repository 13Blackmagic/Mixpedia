const { Schema } = require('mongoose');


const drinkSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  liquorId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = drinkSchema;
