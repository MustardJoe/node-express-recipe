exports.veggieParser = (req, res) => {
  let veggie = (req.params.veggie);
  res.send(`<h1>This is the page for the ${veggie}</h1>`);
};

exports.postContactInfo = (req, res) => {
  /* eslint-disable-next-line no-console */
  console.log('Req.body: ', req.body, 'Req.querry', req.query);
  res.send('Your contact information has been submitted succesfully');
};
