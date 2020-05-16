const ejs = require('ejs'),
  name = require('../views/name.ejs');


exports.veggieParser = (req, res) => {
  let veggie = (req.params.veggie);
  res.send(`<h1>This is the page for the ${veggie}</h1>`);
};

exports.message = (req, res) => {
  let rNumb = Math.floor(Math.random() * 8);
  let messages = [
    'today may be interesting, but wasnt is always?',
    'group together, stronger as a feather, no matter the weather',
    'i eat hawk bacon. and i wash it down with melted cheese',
    'a good egg is a good thing to eat. but do not eat a rotten egg.',
    'nobody really likes baloons... too dangerous!',
    'eat meatloaf sandwich winner',
    'agent cooper is on to you and your activities',
    'good? bad? im the guy with the gun'
  ];
  let ourMessage = messages[rNumb];

  res.send(`<h1>${ourMessage}</h1>`);
};

exports.getName = (req, res) => {
  console.log('trying to get name...', res);
  res.send(name);
};

exports.postContactInfo = (req, res) => {
  /* eslint-disable-next-line no-console */
  console.log('Req.body: ', req.body, 'Req.querry', req.query);
  res.send('Your contact information has been submitted succesfully');
};
