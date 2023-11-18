const db = require('../Resources/db');
module.exports.topBooks = async (req, res) => {
    db.query(`SELECT FileId, FileName,FileImage,ImageExtension
    FROM (
      SELECT DISTINCT FileId, FileName, PublishedTime,FileImage,ImageExtension
      FROM UploadFiles
    ) AS subquery
    ORDER BY PublishedTime DESC
    LIMIT 7;;`, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
            return;
        }
        console.log('Query TopBook:', rows);
        res.status(200).json(rows);
        
    });
    
       
};
