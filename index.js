var express = require("express");

var app = express();
const multer = require('multer');
require("dotenv").config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors());
var bodyParser = require("body-parser");
let apirouter = require('./routers/router');
app.use('/api',apirouter)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();
const storage = multer.memoryStorage(); // You can use other storage options as needed
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 50 * 1024 * 1024, // Increase the field size limit to 10MB (adjust as needed)
  },
});
app.use(upload.single('file'));
var port = process.env.PORT || 8001
const url = process.env.embedingsurl;
var server = app.listen(port, function () {
  var host = server.address().address;

  var port = server.address().port;

  console.log(" app listening at http://%s:%s", host, port);
});
