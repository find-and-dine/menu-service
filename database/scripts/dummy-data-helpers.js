const faker = require('faker');

// method to generate single price string
const generatePrice = () => (`$${Math.floor(Math.random() * 11) + 20}`);

// method to generate 1-3 prices. may or may not contain descriptors.
const threeDescriptors = ['small', 'medium', 'large'];
const twoDescriptors = ['small', 'large'];

const generatePricesArray = () => {
  const numOfPrices = Math.floor(Math.random() * 3) + 1;
  const showDescriptors = Math.random() > 0.5;
  const prices = [];

  for (let i = 0; i < numOfPrices; i += 1) {
    prices.push(generatePrice());
  }

  // TODO: refactor these for loops to reduce code reuse?
  if (numOfPrices === 2 && showDescriptors) {
    for (let i = 0; i < numOfPrices; i += 1) {
      prices[i] = `${twoDescriptors[i]} ${prices[i]}`;
    }
  } else if (numOfPrices === 3 && showDescriptors) {
    for (let i = 0; i < numOfPrices; i += 1) {
      prices[i] = `${threeDescriptors[i]} ${prices[i]}`;
    }
  }

  return prices;
};

// method that generates 5-10 menu items for a given section
const generateMenuItems = () => {
  const numOfMenuItems = Math.floor(Math.random() * 6) + 5;
  const menuItems = [];

  for (let i = 0; i < numOfMenuItems; i += 1) {
    menuItems.push({
      menuItemName: `${faker.random.word()} ${faker.random.word()}`,
      description: faker.lorem.sentence(),
      prices: generatePricesArray(),
    });
  }

  return menuItems;
};

// method that takes a menu and generates an array of 2-7 sections
// (some w/ a name string, some without)
const generateSections = () => {
  const numOfSections = Math.floor(Math.random() * 6) + 2;
  const sections = [];
  for (let i = 0; i < numOfSections; i += 1) {
    const showSectionName = Math.random > 0.25;
    sections.push({
      // 1/4 of sections will have no title.
      sectionName: showSectionName ? `${faker.random.word()} ${faker.random.word()}` : '',
      menuItems: generateMenuItems(),
    });
  }
  return sections;
};

const menuOptions = ['Dinner', 'Lunch', 'Breakfast'];

// method that takes a restaurant and generates an array of 1-3 menus (breakfast, lunch, or dinner)
const generateMenus = () => {
  const numOfMenus = Math.floor(Math.random() * 3);
  const menus = [];
  for (let i = 0; i <= numOfMenus; i += 1) {
    menus.push({
      menuName: menuOptions[i],
      sections: generateSections(),
    });
  }
  return menus;
};

// method that creates 100 random restaurants with ids from 0-99
const generateRestaurants = () => {
  const restaurants = [];
  for (let i = 0; i < 100; i += 1) {
    restaurants.push({
      restaurant_id: i,
      restaurant_name: faker.company.companyName(),
      menus: generateMenus(),
    });
  }
  return restaurants;
};

module.exports = generateRestaurants;
