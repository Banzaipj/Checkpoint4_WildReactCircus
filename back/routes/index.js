const routes = require('express').Router();

// define the index route
routes.post('/', (req, res) => {
  console.log('A new request just hit the API !');
  res.send('Hello dear API client :)');
});

const loginRoute = require('./login');
const spectatorRoute = require('./spectators');

routes.use('/login', loginRoute);
routes.use('/spectators', spectatorRoute);


module.exports = routes;