'use strict';

const express = require('express'),
  app = express(),
  homeController = require('./controllers/homeController'),
  layouts = require('express-ejs-layouts');
const errorController = require('./controllers/errorController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(errorController.logError);
app.use(express.json());

app.use((req, res, next) => {
  /* eslint-disable-next-line no-console */
  console.log(`request made to: ${req.url}`);
  next();
});

app.get('/name', homeController.respondWithName);
app.get('/items/:vegetable', homeController.sendReqParam);

app.post('/', (req, res) => {
  /* eslint-disable-next-line no-console */
  console.log('req.body:', req.body, 'req.query', req.query);
  res.send('POST Successful!');
});

app.listen(app.get('port'), () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server running at http://localhost:${app.get('port')}`);
});

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);
