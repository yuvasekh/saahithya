

var mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
}); 
module.exports.getallusers = async (req, res) => {
    const selectQuery = `SELECT Address,Role,Name,MobileNumber,Email FROM Register`;
  
    connection.query(selectQuery, async (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results);
      }
      console.log(results, "yuva resullt");
      return results;
    });
  };

  module.exports.getusersinfo = async (req, res) => {
    const selectQuery = `SELECT Address,Name,Email,MobileNumber,Gender,DateOfBirth,ProfileImage FROM Register where email=?`;
    let token = req.headers.authorization;
    if (token) {    
      verifyToken(token)
        .then((decodedToken) => {
          connection.query(selectQuery,[decodedToken.Email], async (error, results) => {
            if (error) {
              throw error;
            } else {
              res.status(200).json(results);
            }
            console.log(results, "yuva resullt");
            return results;
          });
        }).catch((error)=>
        {
          res.status(500).json({message:"error"});
        })
      }
      else{
        res.status(401).json({message:"unauthorised"});
      }

  };
  module.exports.updateusersinfo = async (req, res) => {
    console.log(req.body,"userupdated")
    const selectQuery = `UPDATE Register SET gender = '${req.body.Gender}', Name = '${req.body.Name}' , Address = '${req.body.Address}' where  Email = ?`;

    let token = req.headers.authorization;
    if (token) {    
      verifyToken(token)
        .then((decodedToken) => {
          console.log(decodedToken.Email)
          connection.query(selectQuery,[decodedToken.Email], async (error, results) => {
            if (error) {
              throw error;
            } else {
              console.log(selectQuery,"check")
              res.status(200).json(results);
            }
            console.log(results, "yuva resullt");
            return results;
          });
        }).catch((error)=>
        {
          res.status(500).json({message:"error"});
        })
      }
      else{
        res.status(401).json({message:"unauthorised"});
      }

  };
  module.exports.updateRole = async (req, res) => {
    const selectQuery = `update Register set Role='Team' where Email='${req.body.Email}'`;
  
    connection.query(selectQuery, async (error, results) => {
      if (error) {
        throw error;
      } else {
        res.status(200).json(results);
      }
      console.log(results, "yuva resullt");
      return results;
    });
  };
  
  const util = require('util');
const { verifyToken } = require('../Resources/TokenVerifier');
  const dbQuery = util.promisify(connection.query).bind(connection);
  
  module.exports.deleteuser = async (req, res) => {
    try {
      const Email = req.params.email;
      console.log(Email,"email")
      // Define SQL queries
      const sqlQueries = [
        'DELETE FROM comments WHERE Email = ?;',
        'DELETE FROM reports WHERE Email = ?;',
        'DELETE FROM episodes WHERE Email = ?;',
        'DELETE FROM contestparticipators WHERE Email = ?;',
        'DELETE FROM likes WHERE Email = ?;',
        'DELETE FROM views WHERE Email = ?;',
        'DELETE FROM rating WHERE Email = ?;',
        'DELETE FROM resetpassword WHERE Email = ?;',
        'DELETE FROM Register WHERE Email = ?;',
     
     
      ];
  
      // Execute SQL queries concurrently using Promise.all
      await Promise.all(sqlQueries.map(sql => dbQuery(sql, [Email])));
      
      console.log('Transaction committed successfully.');
      res.status(200).json({ data: 'deleted' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: error });
      // Handle the error and possibly roll back the transaction
    }
  };
  