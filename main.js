const port = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  logger = require('morgan');

app.use(logger('dev'));

app.get('/', (req, res) => {
  console.log('Req params, body, url & querry',
    req.params, req.body, req.url, req.querry);
  res.send('Hello Wierd World');
})
  .listen(port, () => {
  /* eslint-disable-next-line no-console */
    console.log(`--------------------------------------------------------------------
  Your Node and Express server has started on port ${port}. 
  Welcome to SkyNet
--------------------------------------------------------------------`);
  });

