const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors"); // Import the CORS middleware
const apirouter = require("./routers/router");
require("dotenv").config();
app.use(cors());

app.use(express.json());
app.use("/api", apirouter);
const storage = multer.memoryStorage(); // You can use other storage options as needed
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 50 * 1024 * 1024, // Increase the field size limit to 10MB (adjust as needed)
  },
});
app.use(upload.single("file"));

const port = process.env.PORT || 8001;
const server = app.listen(port, () => {
  const host = server.address().address;
  const serverPort = server.address().port;

  console.log(`App listening at http://${host}:${serverPort}`);
});
