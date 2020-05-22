const httpStatus = require('http-status-codes');

// Error logging middleware
exports.logError = (error, req, res, next) => {
  /* eslint-disable-next-line no-console */
  console.log('An Error ha occured: \n');
  /* eslint-disable-next-line no-console */
  console.error(error.stack);
  next(error);
};

exports.respondNoResourceFound = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.send(`${errorCode}:
  the page you requested (${req.url}) does not exist. Please check your url or give up all hope.`);
};

exports.respondInternalError = (req, res) => {
  let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
  res.status(errorCode);
  res.send(`${errorCode}:
  Something bad happened... probably i wrote a bad server code.... sad d'oh...`);
};

