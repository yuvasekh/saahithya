const db = require('../Resources/db');
module.exports.topBooks = async (req, res) => {
    db.query(`SELECT FileId, FileName,FileImage
    FROM (
      SELECT DISTINCT FileId, FileName, likes,FileImage
      FROM UploadFiles
    ) AS subquery
    ORDER BY likes DESC
    LIMIT 7;`, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
            return;
        }
        console.log('Query result:', rows);
        res.status(200).json(rows);
        
    });
    
       
};
