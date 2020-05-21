const 
  express = require('express'),
  app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;
const homeController = require('./controllers/homeController');  ;

console.log('view engine', app.get('view engine'));

app.use((req, res, next) => {
  /* eslint-disable-next-line no-console */
  console.log('req stuff', req.method, req.url);
  next();
});

app.get('/name/:name', homeController.respondWithName);

app.get('/', (req, res) => {
  res.render('name');
});

app.get('/diff', (req, res) => {
  res.render('diff');
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`--------------------------------------------------------------------
  Your Node and Express server has started on port ${port}. 
  Welcome to SkyNet
--------------------------------------------------------------------`);
});
