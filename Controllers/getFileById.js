const db = require('../Resources/db');
const {verifyToken}=require('../Resources/TokenVerifier')
module.exports.getFileById = async (req, res) => {
    console.log(req.params.id,"paramsId")
    let query = `SELECT *
    FROM uploadfiles
    LEFT JOIN episodes ON uploadfiles.fileId = episodes.fileId
    WHERE uploadfiles.fileId='${req.params.id}'`;
    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Images:', rows);
        res.status(200).json(rows);
        
    });
    
       
};
module.exports.getFilesByEmail = async (req, res) => {
    console.log(req.headers.authorization, "users");
    let token = req.headers.authorization;
    if (token) {
      verifyToken(token)


        .then((decodedToken)=>
        {
            let query = `select Distinct FileId,FileName from UploadFiles where Email='${decodedToken.Email}'`;
            db.query(query, (err, rows) => {
                if (err) {
                    console.error('Error executing query:', err); 
                    res.status(500).json({message:err})
                   
                }
                console.log('Query result for Images:', rows);
                res.status(200).json(rows);
                
            });
        }).catch((error)=>
        {
            res.status(404).json({message:"Invalid user"})
        })
   
}
else{
    res.status(400).json({message:"Bad Request"})
}
    
       
};
module.exports.getAllFiles = async (req, res) => {
    console.log(req.params.pagecount,"pagecount")
    let query = `SELECT FileId,FileName,CategoryName,SubCategory,Author,Likes,Views,Rating,Email,FileImage,Type
    FROM Uploadfiles
    LIMIT 10
    OFFSET ${req.params.pagecount};
    `;
    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Books:', rows);
        res.status(200).json(rows);
        
    });
    
       
};