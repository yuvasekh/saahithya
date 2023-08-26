

var mysql = require('mysql2');
const connection = mysql.createConnection({
  host: process.env.server,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
}); 
const { v4: uuidv4 } = require("uuid");
 
module.exports.createpole = async (req,res)=>{
console.log(req.body)
    let Id = uuidv4();
    let PoleId=uuidv4()
   

      const selectQuery = `SELECT COUNT(*) AS count FROM register WHERE email ="syuva893@gmail.com"`;
      console.log(selectQuery,"test")

      const insertQuery = 'INSERT INTO pole  VALUES (?, ?)';
      const insertQuery1 = 'INSERT INTO PoleQuestion  VALUES (?, ?,?, ?,?, ?,?, ?)';


      connection.query(selectQuery, async (error, results) => {
        if (error) {
          throw error;
        }
        if(results[0].count>=1)
        {
         
            connection.query(insertQuery, [Id,req.body.email],async (error, results) => {
                if (error) {
                  throw error;
                }
                 connection.query(insertQuery1, [Id,PoleId,req.body.question,req.body.input1,req.body.input2,req.body.input3,req.body.input4,req.body.answer],async (error, results) => {
                if (error) {
                  throw error;
                }

                ;
            });
                res.status(200).json("Cart added");
                console.log('Cart item inserted successfully.');
            });
            
          
        
        
        }
        else{
          res.status(200).json({message:"User Not exists"})
        }
        console.log(results,"yuva resulgt")
    return results;
       
       });
    
      
  
}
