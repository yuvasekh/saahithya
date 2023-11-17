
var mysql = require('mysql2');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
  console.log(req.body)
  const connection = mysql.createConnection({
    host: process.env.server,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
  });
  const query = 'SELECT * FROM Register WHERE email = ? AND password = ?';
  connection.query(query, [req.body.email, req.body.password], (error, results) => {
    if (error) {
      throw error;
    }
    if (results.length > 0) {
      const secretKey = '4sdigilabs'; // Replace with your own secret key
      const options = { expiresIn: '24h' };
      let data = results[0]
      let userdetails = { Name: data.Name, Email: data.Email, MobileNumber: data.MobileNumber, Role: data.Role }
      var token = jwt.sign(userdetails, secretKey, options);
      res.status(200).json({ token: token });
      console.log('Login successful.');
      // Perform further actions after successful login
    } else {
      res.status(500).json({ message: error })
      console.log('Invalid username or password.');
    }
  });
}