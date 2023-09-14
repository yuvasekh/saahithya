const nodemailer = require('nodemailer');
async function EmailSent(email)
{
    console.log("callemailsent")
    const mailOptions = {
        from: 'syuva893@gmail.com',
        to: [email,'hari.user20@gmail.com'],
        subject: 'Saahithya Registration',
        text: `Registration sucess  ${email}`
      };
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:"syuva893@gmail.com",
          pass:"bqmsnfrvjxictcjh"
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