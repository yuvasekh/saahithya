const express = require("express");
const bodyParser = require('body-parser');
const jwtDecode=require('jwt-decode')
const jsonParser = bodyParser.json({ limit: '10mb' }); // Set the limit to a suitable value
var router = express.Router();
var multer = require("multer");
const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({})
const storage = multer.memoryStorage(); // You can use other storage options as needed
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 50 * 1024 * 1024, // Increase the field size limit to 10MB (adjust as needed)
  },
});
function checkAccessKey(req, res, next) {
  let token = req.headers.authorization;
  console.log(token);
  if (token) {
    let decoded = jwtDecode(token);
    console.log(decoded);
    const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
    if (decoded.exp < currentTimestamp) {
      console.log("tokenexpired");
      // res.redirect("http://localhost:5173/login")
      return res.status(401).json({ message: 'Token expired' });
    } else {  
      next();
    }
  } else {
    next();
  }
}
router.use(upload.any(), jsonParser,checkAccessKey, (req, res, next) => {
      return next();
});

require('./login.router')(router);

module.exports = router;
