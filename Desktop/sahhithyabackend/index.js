const { default: axios } = require('axios');
const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const crypto = require('crypto');
const twilio = require('twilio');
const nodemailer = require('nodemailer');



// parse application/json
app.use(bodyParser.json())
const port = 3000;

// Define routes
app.post('/text', (req, res) => {
    var text=req.body.key
            let resp=[]
    console.log(req.body.key,"yuva")
    axios.get(`https://www.google.com/inputtools/request?ime=transliteration_en_te&num=5&cp=0&cs=0&ie=utf-8&oe=utf-8&app=jsapi&text='${text}'`)
    
  .then((response) => {
    
    // console.log('Response:', response.data);  
    res.send( response.data);  
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

 
});
function generateOTP() {
  const OTP_LENGTH = 6;
  const otp = crypto.randomInt(100000, 999999).toString();
  return otp;
}

// Send OTP via Twilio SMS
app.post('/send-otp', (req, res) => {
  const phoneNumber  = '+919703924689'
  const otp = generateOTP();
console.log(otp,"yuva")
  const accountSid = 'ACd4b9249953b41f734305b4e0ceeeea24';
  const authToken = '7569511b9d40868987be950fd7881598';
  const fromNumber = '+919703924689';

  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      body: `Your  From Yuva is: ${otp}`,
      from: fromNumber,
      to: phoneNumber,
    })
    .then((message) => {
      console.log(message.sid);
      res.status(200).send('OTP sent successfully');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('Error sending OTP');
    });
});
app.post('/verify-otp', (req, res) => {
  const { otp, enteredOTP } = req.body;

  if (otp === enteredOTP) {
    res.status(200).send('OTP verified successfully');
  } else {
    res.status(400).send('Invalid OTP');
  }
});
app.post('/send',(req,res)=>
{
  // Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACf8253f88733b8853ef16262e1f1df7b6";
const authToken = "ebd3ae3bb3395148ab82e6c9e9f026ac";
const verifySid = "VA93fc6b4b82426bb21d9d840d53fcb501";
const client = require("twilio")(accountSid, authToken);

client.verify.v2
  .services(verifySid)
  .verifications.create({ to: "+919703924689", channel: "sms" })
  .then((verification) => console.log(verification.status))
  .then(() => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Please enter the OTP:", (otpCode) => {
      client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: "+919703924689", code: otpCode })
        .then((verification_check) => console.log(verification_check.status))
        .then(() => readline.close());
    });
  });
})
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
app.post('/sedmail',(req,res)=>
{const mailOptions = {
  from: 'syuva893@gmail.com',
  to: ['yuvasekhar7893@gmail.com','yuvasekhar970@gmail.com'],
  subject: 'Hello from Node.js',
  text: 'Happy Birthday Smile Yuva'
};
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:"syuva893@gmail.com",
    pass:"ciuzijdkvodejnzl"
  }
});

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


})