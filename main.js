const port = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  logger = require('morgan');

app.use(logger('dev'));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use((req, res, next) => {
  /* eslint-disable-next-line no-console */
  console.log(`Loggin' Regest Info:
  method: ${req.method}, url: ${req.url}`
  // ${(req.params || req.params !== 'undefined') ? `params: ${req.params}` : null}
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Wierd World');
});

app.get('/items/:veggie', (req, res) => {
  let veggie = (req.params.veggie);
  res.send(`<h1>This is the page for the ${veggie}</h1>`);
});

app.post('/', (req, res) => {
  /* eslint-disable-next-line no-console */
  console.log('Req.body: ', req.body, 'Req.querry', req.query);
  res.send('Your contact information has been submitted succesfully');
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`--------------------------------------------------------------------
  Your Node and Express server has started on port ${port}. 
  Welcome to SkyNet
--------------------------------------------------------------------`);
});

