const axios = require('axios')

const db = require('../config/connection');
const { User , Thought , Drink } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
    const data = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
    await Thought.deleteMany({});
    await User.deleteMany({});
    await Drink.deleteMany({});

    await User.create(userSeeds);
  
    const drinkSeeds = data.data.drinks.map(item => {
      return {
        idDrink: item.idDrink,
        name: item.strDrink,
        glass: item.strGlass,
        image: item.strDrinkThumb,
        category: item.strCategory,
        instructions: item.strInstructions
      }
    })
    
    const drinksall = await Drink.create(drinkSeeds);
    console.log(drinksall)
    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
