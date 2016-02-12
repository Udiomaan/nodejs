module.exports = function delItem(req, res, next) {
  res.send(202, {hey: 'there'});
  next();
};
