const Menu = require('./../index.js');
const GenerateRestaurants = require('./dummy-data-helpers.js');

const restaurants = GenerateRestaurants();

restaurants.forEach((restaurant) => {
  new Menu(restaurant).save((err) => {
    if (err) {
      console.log(`Error seeding db: ${err}`);
    }
  });
});
