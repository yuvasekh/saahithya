

var mysql = require('mysql2');
module.exports.register = async (req,res)=>{
  console.log(req.body)
    var data=req.body
    // var email=req.bodyp.email
    if(req.body.name && req.body.email && req.body.mobile && req.body.gender && req.body.password && req.body.dob && req.body.address)
    {
    var connection = mysql.createConnection({
        host: "162.214.80.121",
        user: "rishiuan_harisaahithya",
        password: "Saketh!7727",
      database:"rishiuan_saahithya"
      });  
      const selectQuery = 'SELECT COUNT(*) AS count FROM register WHERE email = ?';
    //   const insertQuery = 'INSERT INTO users (email) VALUES (?)';
      const insertQuery = 'INSERT INTO register  VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
      connection.query(selectQuery, [req.body.email], (error, results) => {
        if (error) {
          throw error;
        }
    
        const count = results[0].count;
    
        if (count === 0) {
          
          connection.query(insertQuery, [req.body.name, req.body.email, req.body.mobile,req.body.gender, req.body.password,req.body.address,"user",req.body.dob], (error,result) => {
            if (error) {
             
              res.status(500).json({message:error})
            }
            console.log('Email inserted successfully.');
            res.status(200).json(result);
          });
        } else {
          console.log('Email already exists.');
          res.status(500).json({message:error})
        }
      });
    }
    else{
        res.status(500).json({message:"Invalid data"})

    }
      
  
}
