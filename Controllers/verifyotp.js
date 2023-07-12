var mysql = require('mysql2');
var {EmailSent}=require('../Resources/Emailsent')

var mysql = require('mysql2');
// const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } =
const TWILIO_ACCOUNT_SID = "ACf8253f88733b8853ef16262e1f1df7b6";
const  TWILIO_AUTH_TOKEN = "983a6d34ed1949b36048097bbb2a87c0";
const TWILIO_SERVICE_SID = "VA93fc6b4b82426bb21d9d840d53fcb501";
  // process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});
module.exports.verifyotp = async (req, res) => {
    // console.log(req.body.data,"check++++++++++")
    // const { data, otp } = req.body.data ?? {};
    // console.log(data)
    console.log(req.body.data.mobile,req.body.otp,"mobile check")
    var dob=req.body.data.dob;
    const year = dob['$y'];
const month = dob['$M'] + 1; // Note: Month is zero-based, so add 1
const day = dob['$D'];

// Create a new Date object using the extracted components
const dateObj = new Date(year, month, day);

// Format the date as a string
const formattedDate = dateObj.toDateString();

console.log(formattedDate);
    try {
      const result = await client.verify
        .services(TWILIO_SERVICE_SID)
        .verificationChecks.create({
          to: `+91 ${req.body.data.mobile}`,
          code: req.body.otp,
        });
        console.log(req.body.data.mobile,"mobile check")
          await EmailSent(req.body.data.email)
          var connection = mysql.createConnection({
            host: "162.214.80.121",
            user: "rishiuan_harisaahithya",
            password: "Saketh!7727",
          database:"rishiuan_saahithya",
          connectTimeout: 10000000,
          });  
          const selectQuery = 'SELECT COUNT(*) AS count FROM register WHERE email = ?';
        //   const insertQuery = 'INSERT INTO users (email) VALUES (?)';
          const insertQuery = 'INSERT INTO register  VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
          connection.query(selectQuery, [req.body.data.email], (error, results) => {
            if (error) {
              throw error;
            }
        
            const count = results[0].count;
        
            if (count === 0) {
          
              
              
              connection.query(insertQuery, [req.body.data.name, req.body.data.email, req.body.data.mobile,req.body.data.gender, req.body.data.password,req.body.data.address,"user",formattedDate], (error,result) => {
                if (error) {
                 
                  res.status(500).json({message:error})
                }
                console.log('Email inserted successfully.');
                res.status(200).json(result);
              });
            } else {
              console.log('Email already exists.');
              res.status(500).json({message:error})
            }
          });
    //   res.status(200).send({
    //     success: true,
    //     message: `OTP verified successfully`,
    //     payload: result,
    //   });
    } catch (err) {
        console.log(err)
    //   res.status(500).send({
    //     success: false,
    //     message: `Error in verifying otp: ${err.message}`,
    //   });
    }
  };