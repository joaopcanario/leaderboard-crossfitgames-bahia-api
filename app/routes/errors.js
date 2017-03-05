module.exports = function(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500 || err.status);
  res.json({error: err.msg});
};
