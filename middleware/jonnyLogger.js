const jonnyLogger = (req, res, next) => {
  /* eslint-disable-next-line no-console */
  console.log(`Logging Request Info:
  method: ${req.method}, url: ${req.url}`);
  next();
};

module.exports = jonnyLogger;
