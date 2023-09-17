const db = require('../Resources/db');
module.exports.latest = async (req, res) => {
    console.log("latest")

          
    db.query(`SELECT FileId, FileName,FileImage
    FROM (
      SELECT DISTINCT FileId, FileName, PublishedTime,FileImage
      FROM UploadFiles
    ) AS subquery
    ORDER BY PublishedTime DESC
    LIMIT 5;`, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.stack); 
            res.status(500).json({message:err})
            return;
        }
        res.status(200).json(rows);
        
        console.log('Query result:', rows);
    });
    
       
};
