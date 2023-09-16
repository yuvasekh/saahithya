var { EmailSent } = require("../Resources/Emailsent");
var { Jwttoken } = require("../Resources/Jwttoken");
const moment = require('moment');
var mysql = require("mysql2");
// const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } =
const TWILIO_ACCOUNT_SID = "ACf8253f88733b8853ef16262e1f1df7b6";
const TWILIO_AUTH_TOKEN = "6fac918092ed1b4dcfaa49ba06767d5f";
const TWILIO_SERVICE_SID = "VA93fc6b4b82426bb21d9d840d53fcb501";
// process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
module.exports.verifyotp = async (req, res) => {
  console.log(req.body, req.body.otp, "mobile check");
  var dob = req.body.dob;
  let data = req.files;
  console.log(data,"data")
  const year = dob["$y"];
  const month = dob["$M"] + 1; // Note: Month is zero-based, so add 1
  const day = dob["$D"];
  const formattedDate = moment(dob["$d"]).format('YYYY-MM-DD HH:mm:ss');
  try {
    const result = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+91 ${req.body.mobile}`,
        code: req.body.otp,
      });
    console.log(req.body.mobile, "mobile check");
    await EmailSent(req.body.email);
    const selectQuery =
      "SELECT COUNT(*) AS count FROM Register WHERE email = ?";
    const insertQuery = "INSERT INTO Register  VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)";
    connection.query(selectQuery, [req.body.email], (error, results) => {
      if (error) {
        throw error;
      }
      const count = results[0].count;
console.log(count,"Email Count")
      if (count === 0) {
        console.log("Inside if")
        connection.query(
          insertQuery,
          [
            req.body.name,
            req.body.email,
            req.body.mobile,
            req.body.gender,
            req.body.password,
            req.body.address,
            "user",
            formattedDate,
            data[0].buffer
          ],
          async (error, result) => {
            if (error) {
              console.log(error)
              res.status(500).json({ message: error });
            }
            console.log("No error")
            var token = await Jwttoken(
              req.body.email,
              "user",
              req.body.mobile
            );
            console.log("Email inserted successfully.", token);

            res.status(200).json(result);
          }
        );
      } else {
        console.log("Email already exists.");
        res.status(400).json({ message: "Email Already Exists" });
      }
    });

  } catch (err) {
    console.log(err);
    //   res.status(500).send({
    //     success: false,
    //     message: `Error in verifying otp: ${err.message}`,
    //   });
  }
};
