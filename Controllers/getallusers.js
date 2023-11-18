

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
  