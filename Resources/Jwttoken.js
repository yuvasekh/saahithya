const { BlobServiceClient } = require("@azure/storage-blob");
const jwt = require('jsonwebtoken');

async function Jwttoken(email,role,mobile) {
    const secretKey = 'your-secret-key'; // Replace with your own secret key
    const payload = {
      userId: email,
      Mobile: mobile,
      role:role,
    };
    
    const options = {
      expiresIn: '1h', // Optional: Token expiration time
    };
    
    // Generate the token
    const token = jwt.sign(payload, secretKey, options);
    console.log('Generated Token:', token);
    return token;
    
  }
  module.exports.Jwttoken=Jwttoken