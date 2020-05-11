exports.veggieParser = (req, res) => {
  let veggie = (req.params.veggie);
  res.send(`<h1>This is the page for the ${veggie}</h1>`);
};

