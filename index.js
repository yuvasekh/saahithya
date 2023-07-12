var express = require("express");

var app = express();
require("dotenv").config();
// const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
let apirouter = require('./routers/router');
app.use('/api',apirouter)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("dotenv").config();


const port = process.env.PORT || 8001;

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});