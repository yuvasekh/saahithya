

var mysql = require('mysql2');
// const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } =
const TWILIO_ACCOUNT_SID = "ACf8253f88733b8853ef16262e1f1df7b6";
const  TWILIO_AUTH_TOKEN = "6ff2554e32c23e2a592ce891c3510c77";
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
 
module.exports.register = async (req,res)=>{
  
    var data=req.body
    var mobile=req.body.mobile
    // var email=req.bodyp.email
    if(req.body.name && req.body.email && req.body.mobile && req.body.gender && req.body.password && req.body.dob && req.body.address)
    {
  
      const selectQuery = 'SELECT COUNT(*) AS count FROM Register WHERE email = ?';
      console.log(selectQuery,"tet")
    //   const insertQuery = 'INSERT INTO users (email) VALUES (?)';
      const insertQuery = 'INSERT INTO Register  VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
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
