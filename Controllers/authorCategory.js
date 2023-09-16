const db = require('../Resources/db');
module.exports.authorCategory = async (req, res) => {
    console.log(req.body,"authorcategory??????????????/")
   
    let requestdata=req.body

    let query = `SELECT r.ProfileImage, u.*
    FROM register r
    INNER JOIN uploadfiles u ON r.Email = u.Email
    WHERE u.AuthorCategory = '${requestdata.Category}' and r.Email='${requestdata.Email}';`;

    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            // res.status(500).json({message:err})
            return;
        }
        console.log('Query result:', rows);
        res.status(200).json(rows);
        
    });
    
       
};
module.exports.authorCategoryImages = async (req, res) => {
    console.log(req.body,"requested datafrom api",req.params.name)
   
    

    let query = `SELECT  Name,ProfileImage,Email FROM register WHERE Email IN (

        SELECT Email FROM uploadfiles WHERE AuthorCategory='${req.params.name}'
    );`;

    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Images:', rows);
        res.status(200).json(rows);
        
    });
    
       
};
