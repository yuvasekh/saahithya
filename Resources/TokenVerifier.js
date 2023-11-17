const jwt = require('jsonwebtoken');
require("dotenv").config();
let secretKey = process.env.secretKey;

async function verifyToken(token) {
  console.log("Not sorry")
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error('Token verification failed:', err);
        reject('Token verification failed: ' + err.message); // Reject with an error message
      } else {
        console.log('Token verified successfully.');
        console.log('Decoded token payload:', decoded);
        resolve(decoded);
      }
    });
  });
}

module.exports.verifyToken = verifyToken;
