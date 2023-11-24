const nodemailer = require('nodemailer');
async function EmailSent(email)
{
    console.log("callemailsent")
    const mailOptions = {
        from: 'saahithya.com@gmail.com',
        to: [email,'hari.user20@gmail.com'],
        subject: 'Saahithya Registration',
        text: `Registration sucess  ${email}`
      };
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:"saahithya.com@gmail.com",
          pass:"saah phlv adrd rjom"
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
        from: 'saahithya.com@gmail.com',
        to: [email,'hari.user20@gmail.com'],
        subject: 'Saahithya Password Reset',
        text: `Link  Here ${link} It will expires in 5 minutes Dear  ${email}`
      };
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:"saahithya.com@gmail.com",
          pass:"saah phlv adrd rjom"
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