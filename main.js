//  Imports and Server-level Variables
const port = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  homeController = require('./controllers/homeController'),
  jonnyLogger = require('./middleware/jonnyLogger');

//  Instantiating Middleware
app.use(logger('dev'));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(jonnyLogger);

// Routing
app.get('/', (req, res) => {
  res.send('Hello Wierd World');
});

app.get('/items/:veggie', homeController.veggieParser);

app.post('/', homeController.postContactInfo);

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`--------------------------------------------------------------------
  Your Node and Express server has started on port ${port}. 
  Welcome to SkyNet
--------------------------------------------------------------------`);
});

