

var mysql = require('mysql2');
const { verifyToken } = require("../Resources/TokenVerifier.js");
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
}); 
const { v4: uuidv4 } = require("uuid");
 
module.exports.addtocarts = async (req,res)=>{
  console.log(req.body,"yuva cart")

    var FileId=req.body.FileId
    let Id = uuidv4();
    // var email=req.bodyp.email
    let token = req.headers.authorization;
    if (token) {
      verifyToken(token).then(async (decodedToken) => {
        
      const selectQuery = `SELECT COUNT(*) AS count FROM cart WHERE email ='${decodedToken.Email}' and Fileid='${FileId}'`;
      console.log(selectQuery,"test")
      const selectQuery1 = `
      SELECT uploadfiles.*, episodes.EpisodeId
      FROM episodes
      INNER JOIN uploadfiles ON episodes.FileId = uploadfiles.FileId
      WHERE episodes.EpisodeId = '${req.body.FileId}'`;
      ;
      // const selectQuery1 = `SELECT * FROM UploadFiles WHERE   Fileid='${FileId}'`;
      const insertQuery = 'INSERT INTO cart  VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?)';

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
            console.log(results,"info")
            connection.query(insertQuery, [Id,results[0].FileId,results[0].CategoryName,results[0].SubCategory,1,results[0].Price,decodedToken.Email,results[0].FileImage,results[0].FileName,results[0].EpisodeId],async (error, results) => {
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
      )}
    
      
  
}
