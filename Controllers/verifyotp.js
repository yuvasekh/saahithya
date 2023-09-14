var { EmailSent } = require("../Resources/Emailsent");
var { Jwttoken } = require("../Resources/Jwttoken");

var mysql = require("mysql2");
// const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } =
const TWILIO_ACCOUNT_SID = "ACf8253f88733b8853ef16262e1f1df7b6";
const TWILIO_AUTH_TOKEN = "308848b8618b3c27c54c061bc529f9e9";
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
  console.log(req.body.data.mobile, req.body.otp, "mobile check");
  var dob = req.body.data.dob;
  const year = dob["$y"];
  const month = dob["$M"] + 1; // Note: Month is zero-based, so add 1
  const day = dob["$D"];
  const dateObj = new Date(year, month, day);
  const formattedDate1 = dateObj.toDateString();
  const parsedDate = new Date(formattedDate1);
  const formattedDate = parsedDate.toISOString().slice(0, 10);

  try {
    const result = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+91 ${req.body.data.mobile}`,
        code: req.body.otp,
      });
    console.log(req.body.data.mobile, "mobile check");
    await EmailSent(req.body.data.email);
    const selectQuery =
      "SELECT COUNT(*) AS count FROM Register WHERE email = ?";
    const insertQuery = "INSERT INTO Register  VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(selectQuery, [req.body.data.email], (error, results) => {
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
            req.body.data.name,
            req.body.data.email,
            req.body.data.mobile,
            req.body.data.gender,
            req.body.data.password,
            req.body.data.address,
            "user",
            formattedDate,
          ],
          async (error, result) => {
            if (error) {
              console.log(error)
              res.status(500).json({ message: error });
            }
            console.log("No error")
            var token = await Jwttoken(
              req.body.data.email,
              "user",
              req.body.data.mobile
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
