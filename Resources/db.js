
// require("dotenv").config();
// const config = {
//   server: process.env.server,
//   database: process.env.database,
//   user: process.env.user,
//   password: process.env.password,
//   options: {
//     encrypt: true,
//   },
// }; 
// console.log(config)
// let pool;
// const mysql = require('mysql2');
// async function initialize()
// {
//      pool = mysql.createConnection(config);
// }


// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ', err);
//     return;
//   }
//   console.log('Connected to MySQL database!');
// });
// async function executeQuery(query) {
//   try {
//     const result = await pool.request().query(query);
//     return result.recordset;
//   } catch (error) {
//     console.log("Query execution failed:", error);
//     return null;
//   }
// }

// module.exports = {
//   initialize,
//   executeQuery,
// };