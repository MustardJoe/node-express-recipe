const 
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

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
