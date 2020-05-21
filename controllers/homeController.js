'use strict';

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.respondWithName = (req, res) => {
  let ourName = req.params.name;
  res.render('name', { name: ourName });
};
