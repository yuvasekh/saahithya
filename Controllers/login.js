
var mysql = require('mysql2');
const jwt = require('jsonwebtoken');

module.exports.login = async (req,res)=>{
  console.log(req.body)

  var connection = mysql.createConnection({
    host: "162.214.80.121",
    user: "rishiuan_harisaahithya",
    password: "Saketh!7727",
  database:"rishiuan_saahithya",
  connectTimeout: 10000000,
  });  
 
   
    const query = 'SELECT * FROM register WHERE email = ? AND password = ?';

  connection.query(query, [req.body.email, req.body.password], (error, results) => {
    if (error) {
      throw error;
    }

    if (results.length > 0) {

console.log(results)
const secretKey = 'your_secret_key'; // Replace with your own secret key
const options = { expiresIn: '1h' };

   var token= jwt.sign(results[0], secretKey, options);
        res.status(200).json({ token: token });
      console.log('Login successful.');
      // Perform further actions after successful login
    } else {
        res.status(500).json({message:error})
      console.log('Invalid username or password.');
    }
  });
}