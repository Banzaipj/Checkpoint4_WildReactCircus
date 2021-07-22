const loginRoute = require('express').Router();
const { verifyPassword } = require('../middlewares/auth');
const db = require('../db-config');

loginRoute.post('/', (req, res, next) => {
  const spectator = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password

  };

  db.query('SELECT id, password FROM spectator WHERE email = ?', [spectator.email], (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else if (results.length === 1) {
      req.db = { id: results[0].id, password: results[0].password };
      next();
    } else {
      res.sendStatus(400);
    }
  });
}, verifyPassword);

module.exports = loginRoute;
