module.exports = function delList(req, res, next) {
  res.send(202, {hey: 'there'});
  next();
};
