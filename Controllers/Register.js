

var mysql = require('mysql2');
// const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } =
const TWILIO_ACCOUNT_SID = "ACf8253f88733b8853ef16262e1f1df7b6";
const  TWILIO_AUTH_TOKEN = "983a6d34ed1949b36048097bbb2a87c0";
const TWILIO_SERVICE_SID = "VA93fc6b4b82426bb21d9d840d53fcb501";
  // process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});
var connection = mysql.createConnection({
  host: "162.214.80.121",
  user: "rishiuan_harisaahithya",
  password: "Saketh!7727",
  database: "rishiuan_saahithya", // 60 seconds (adjust as needed)
});
 
module.exports.register = async (req,res)=>{
  console.log(req.body)
    var data=req.body
    var mobile=req.body.mobile
    // var email=req.bodyp.email
    if(req.body.name && req.body.email && req.body.mobile && req.body.gender && req.body.password && req.body.dob && req.body.address)
    {
  
      const selectQuery = 'SELECT COUNT(*) AS count FROM register WHERE email = ?';
      console.log(selectQuery,"tet")
    //   const insertQuery = 'INSERT INTO users (email) VALUES (?)';
      const insertQuery = 'INSERT INTO register  VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
      connection.query(selectQuery, [req.body.email], async (error, results) => {
        if (error) {
          throw error;
        }
    
        const count = results[0].count;
    console.log(count,"tet")
        if (count === 0) {
          const sendOtp = async (req, res) => {
            const  phoneNumber  = mobile
            console.log(phoneNumber,"checkyuva")
          
            try {
              const result = await client.verify
                .services(TWILIO_SERVICE_SID)
                .verifications.create({
                  to: `+91 ${phoneNumber}`,
                  channel: "sms",
                });
            console.log("sent")
            } catch (err) {
             console.log(err)
            }
          };
          
          try{
              await sendOtp();
           res.status(200).json("OTp sent")
          }
          catch(error)
          {
            console.log(error)
            res.status(500).json({message:error})

          }
      
        } else {
          console.log('Email already exists.');
          res.status(500).json({message:"Email Already Exists"})
        }
      });
    }
    else{
        res.status(500).json({message:"Invalid data"})

    }
      
  
}
