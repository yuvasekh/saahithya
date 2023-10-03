

var mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
}); 
 
module.exports.updatecart = async (req,res)=>{
  console.log(req.body)
    var Email=req.body.Email;
      const selectQuery = `update UploadFiles set Iscart=1 WHERE email = ?`;
      console.log(selectQuery,"test")
      connection.query(selectQuery,[Email],async (error, results) => {
        if (error) {
          throw error;
        }
    
       return results;
      });
    
      
  
}
