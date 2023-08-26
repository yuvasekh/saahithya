

var mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
}); 
const { v4: uuidv4 } = require("uuid");
 
module.exports.addtocarts = async (req,res)=>{
  console.log(req.body.FileId,"yuva fileId")

    var FileId=req.body.FileId
    let Id = uuidv4();
    // var email=req.bodyp.email

      const selectQuery = `SELECT COUNT(*) AS count FROM cart WHERE email ="syuva893@gmail.com" and Fileid='${FileId}'`;
      console.log(selectQuery,"test")
      const selectQuery1 = `SELECT * FROM UploadFiles WHERE   Fileid='${FileId}'`;
      const insertQuery = 'INSERT INTO cart  VALUES (?, ?, ?, ?, ?, ?, ?,?,?)';


      connection.query(selectQuery, async (error, results) => {
        if (error) {
          throw error;
        }
        if(results[0].count==0)
        {
          connection.query(selectQuery1,async (error, results) => {
            if (error) {
              throw error;
            }
            console.log(results)
            connection.query(insertQuery, [Id,results[0].FileId,results[0].CategoryName,results[0].SubCategory,1,results[0].Price,results[0].Email,results[0].FileImage,results[0].FileName],async (error, results) => {
                if (error) {
                  throw error;
                }
                res.status(200).json("Cart added");
                console.log('Cart item inserted successfully.');
            });
          
          });
        
        }
        else{
          res.status(200).json({message:"Item already exists"})
        }
        console.log(results,"yuva resulgt")
    return results;
       
       });
    
      
  
}
