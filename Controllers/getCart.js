const db = require('../Resources/db');
module.exports.getCart = async (req, res) => {
    console.log("latest yyva",req.body.FileId)
var email=req.body.FileId
          
    db.query(`SELECT * FROM cart where Email='${email}'`, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.stack); 
            res.status(500).json({message:err})
            return;
        }
        res.status(200).json(rows);
        
        console.log('Query result:', rows);
    });
    
       
};