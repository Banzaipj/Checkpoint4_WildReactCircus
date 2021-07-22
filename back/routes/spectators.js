const spectatorRoute = require('express').Router();
const db = require('../db-config');
const { hashPassword } = require('../middlewares/auth');

spectatorRoute.get('/', (req, res) => {
  db.query('SELECT * from spectator', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.status(200).json(results);
    }
  });
});

spectatorRoute.post('/', hashPassword, (req, res) => {
  const spectator = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
    
  };

  db.query('INSERT INTO spectator (name, email, password) VALUES (?, ?, ?)', [spectator.name, spectator.email, spectator.password], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      delete spectator.password;
      res.status(201).json({ ...spectator, id: results.insertId });
    }
  });
});

module.exports = spectatorRoute;
