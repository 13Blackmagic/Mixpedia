const connection = require('../config/connection');
const { User, Thoughts, Drinks } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  let applicationCheck = await connection.db.listCollections({ name: 'Thoughts' }).toArray();
  if (applicationCheck.length) {
    await connection.dropCollection('applications');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  let drinkCheck = await connection.db.listCollections({ name: 'drinks' }).toArray();
    if (drinkCheck.length) {
        await connection.dropCollection('drinks');
    }

  const user = [];
  const Thoughts = getRandomThoughts(10);
  const Drinks = getRandomDrinks(10);

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomUser();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    user.push({
      first,
      last,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  await User.collection.insertMany(user);
  await Thoughts.collection.insertMany(applications);
    await Drinks.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(user);
  console.table(Thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
