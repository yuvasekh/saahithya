var mysql = require("mysql2");
require("dotenv").config();
// const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } =
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;
console.log(TWILIO_SERVICE_SID,"TWILIO_SERVICE_SID")
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

module.exports.register = async (req, res) => {
  console.log("regisercall");
  var data = req.body;
  const imageContent = req.body.inputFile;
  console.log(imageContent, "imagecontent", req.files);
  var email = req.body.email;
  let mobile=req.body.mobile
  if (
    req.body.name &&
    req.body.email &&
    req.body.mobile &&
    req.body.gender &&
    req.body.password &&
    req.body.dob &&
    req.body.address
  ) {
    const selectQuery =
      "SELECT COUNT(*) AS count FROM Register WHERE email = ?";

    connection.query(selectQuery, [req.body.email], async (error, results) => {
      if (error) {
        throw error;
      }

      const count = results[0].count;
      console.log(count, "tet");
      if (count === 0) {
        const sendOtp = async (req, res) => {
          const phoneNumber = mobile;
          console.log(phoneNumber, "checkyuva");

          try {
            const result = await client.verify
              .services(TWILIO_SERVICE_SID)
              .verifications.create({
                to: `+91 ${phoneNumber}`,
                channel: "sms",
              });
            console.log("sent");
          } catch (err) {
            console.log(err);
          }
        };

        try {
          await sendOtp();
          res.status(200).json("OTp sent");
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: error });
        }
      } else {
        console.log("Email already exists.");
        res.status(500).json({ message: "Email Already Exists" });
      }
    });
  } else {
    res.status(500).json({ message: "Invalid data" });
  }
};
