const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ limit: '10mb' }); // Set the limit to a suitable value
var router = express.Router();
var multer = require("multer");
const storage = multer.memoryStorage(); // You can use other storage options as needed
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 50 * 1024 * 1024, // Increase the field size limit to 10MB (adjust as needed)
  },
});
// function checkAccessKey(req, res, next) {

//     console.log(req.headers.email)

//   }

router.use(upload.any(), jsonParser, (req, res, next) => {
    // console.log(req.headers,"headerslist")
    return next();
});

require('./login.router')(router);

module.exports = router;
