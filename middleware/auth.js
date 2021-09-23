// we have to verify the token
const jwt = require('jsonwebtoken');
// we need access to the secret so bring in config
const config = require('config');

// create function, since it is middleware include next which says move on to next middleware
module.exports = function (req, res, next) {
  // get token from header (we usually use req.body in this case we use req.header)
  const token = req.header('x-auth-token');

  // Check if there is no token
  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });
  }

  // If there is a token we proceed and verify (takes in token and jwt secret via config)
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // then we get the user(of which we only have the id in the payload) and assign it to the request object
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
