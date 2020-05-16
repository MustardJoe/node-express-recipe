//  Imports and Server-level Variables
const 
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  logger = require('morgan'),
  homeController = require('./controllers/homeController'),
  jonnyLogger = require('./middleware/jonnyLogger');

app.set('view engine', 'ejs');
// app.set("view engine", "ejs");

/* eslint-disable-next-line no-console */
console.log('app.view engine:', app.get('view engine'));

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
app.get('./name', homeController.getName);

app.get('/', (req, res) => {
  res.send('Hello Wierd World');
});

app.get('/message.html', homeController.message);

app.get('/items/:veggie', homeController.veggieParser);


app.post('/', homeController.postContactInfo);

app.post('/sign_up', homeController.postContactInfo);

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`--------------------------------------------------------------------
  Your Node and Express server has started on port ${port}. 
  Welcome to SkyNet
--------------------------------------------------------------------`);
});

