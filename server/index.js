const express = require('express');
// const path = require('path');
// const axios = require('axios');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

// TODO: update once static client files are available
// app.use(express.static())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/menu/:id', (req, res) => {
  const { id } = req.params;

  db.find({ restaurant_id: id }, (err, data) => {
    if (err) {
      res.send(404);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log('listening, on port: ', PORT);
});
