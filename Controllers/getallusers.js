

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