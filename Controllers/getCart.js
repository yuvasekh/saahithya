const db = require('../Resources/db');
const { verifyToken } = require("../Resources/TokenVerifier");
module.exports.getCart = async (req, res) => {
 console.log(req.headers.authorization,"yuvase")
 let token=req.headers.authorization
 if(token)
 {
    verifyToken(token).then(async (decodedToken) => {
        if (req.headers.authorization) {
            db.query(`SELECT * FROM cart where Email='${decodedToken.Email}'`, (err, rows) => {
                if (err) {
                    console.error('Error executing query:', err.stack); 
                    res.status(500).json({message:err})
                    return;
                }
                console.log('Query result:', rows);
                res.status(200).json(rows);
                
               
        
            });
        }})

 }
 else
 {
    res.status(401).json({message:"Invalid Token"});

 }

  
    
       
};