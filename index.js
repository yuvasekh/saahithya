var express = require("express");

var app = express();
require("dotenv").config();
// const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(cors());
// const multipart = require("parse-multipart");
var bodyParser = require("body-parser");
// var axios=require('axios')
let apirouter = require('./routers/router');
app.use('/api',apirouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();
// var multer = require("multer");
// const upload = multer();
// app.use(upload.any());

const port = process.env.PORT || 8006;

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});