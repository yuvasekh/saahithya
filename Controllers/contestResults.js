var mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../Resources/TokenVerifier.js");
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
module.exports.getquizresults = async (req, res) => {
    const selectQuery = `SELECT * FROM QuizResults`;
  
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
  module.exports.poleparticipators = async (req, res) => {
    const selectQuery = `SELECT * FROM poleparticipators`;
  
    connection.query(selectQuery, async (error, results) => {
      if (error) {
        throw error;
      } else {
        console.log(results)
        res.status(200).json(results);
      }
      console.log(results, "yuva resullt");
      return results;
    });
  };