const ejs = require('ejs');
// const name = require('../views/name.ejs');

/* eslint-disable-next-line no-console */
console.log('im in the home controller');

// exports.getName = (req, res) => {
//   console.log('trying to get name...', res);
//   res.send(name.ejs);
// };

exports.respondWithName = (req, res) => {
  let ourName = req.params.name;
  console.log('ourName', ourName, 'req.params:', req.params);
  res.render('name', { name: ourName });
};

