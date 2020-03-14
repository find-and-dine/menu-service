const mongoose = require('mongoose');

const PORT = 27017;

mongoose.connect(`mongodb://localhost:${PORT}/menuService`, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log(`db connection for menu API open on port: ${PORT}`);
});

db.on('error', (err) => {
  console.log('menu API db connection error: ', err);
});

const menuSchema = new mongoose.Schema({
  restaurant_id: Number,
  restaurant_name: String,
  menus: [{
    menuName: String,
    sections: [{
      sectionName: String,
      menuItems: [{
        menuItemName: String,
        description: String,
        prices: [],
      }],
    }],
  }],
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
