module.exports = (err, req, res, next) => {
  console.log(err.message);

  let statusCode = 500;

  if(err.name === 'ValidationError') {
    statusCode = 400;
  }
  
  res.status(500).json({ message: err.message });
} 