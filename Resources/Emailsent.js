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

async function ForgotEmailSent(email,link)
{
    console.log("callemailsent")
    const mailOptions = {
        from: 'syuva893@gmail.com',
        to: [email,'hari.user20@gmail.com'],
        subject: 'Saahithya Password Reset',
        text: `Link  Here ${link} It will expires in 5 minutes Dear  ${email}`
      };
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:"saahithya.com@gmail.com",
          pass:"yuae falp ktnb ohla"
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

module.exports = {EmailSent,ForgotEmailSent}