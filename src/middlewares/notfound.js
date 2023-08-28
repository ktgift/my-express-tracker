module.exports = (req, res, next) => {
  res.status(404).json({ message: '<h1>404 not found</h1>'})
}