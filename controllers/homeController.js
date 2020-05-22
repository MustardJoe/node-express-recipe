'use strict';

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  let ourName = req.params.name;
  /* eslint-disable-next-line no-console */
  console.log('ourName in req.params', ourName);
  res.render('index');
};
