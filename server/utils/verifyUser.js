const pool = require('../config/db.config.js');
const { errorHandler } = require('./error.js');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWTSECRET;

function verifyToken(req, res, next) {
  const token = req.cookies.auth_token;

  if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify(token, jwtSecret, async (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden'));
    req.user = user;
    next();
  });
}

exports.verifyToken = verifyToken;
