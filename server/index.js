const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

app.use('/:id', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/api/bundle', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'bundle.js'));
});

app.get('/api/resources/menuIcon', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'resources', 'menuIcon.png'));
});

app.get('/api/resources/poweredBy', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'resources', 'poweredBy.png'));
});

app.get('/api/menu/:id', (req, res) => {
  const { id } = req.params;

  db.find({ restaurant_id: id }, (err, data) => {
    if (err) {
      res.send(404);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('listening, on port: ', PORT);
});
