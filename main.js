const port = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  logger = require('morgan');

app.use(logger('dev'));

app.get('/', (req, res) => {
  console.log('Req params, body, url & querry',
    req.params, req.body, req.url, req.querry);
  res.send('Hello Wierd World');
});

app.get('/items/:veggie', (req, res) => {
  let veggie = (req.params.veggie);
  console.log('req.params', req.params, 'veggie', veggie);
  res.send(`<h1>This is the page for the ${veggie}</h1>`);
});

app.post('/', (req, res) => {
  res.send('Your contact information has been submitted succesfully');
});

app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`--------------------------------------------------------------------
  Your Node and Express server has started on port ${port}. 
  Welcome to SkyNet
--------------------------------------------------------------------`);
});

