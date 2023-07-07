const nodemailer = require('nodemailer');
async function EmailSent()
{
    console.log("callemailsent")
    const mailOptions = {
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
}

module.exports = {EmailSent}