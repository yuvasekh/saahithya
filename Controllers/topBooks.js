const db = require('../Resources/db');
module.exports.topBooks = async (req, res) => {
    db.query(`SELECT subquery.FileId, subquery.FileName, subquery.FileImage, e.EpisodeId,subquery.ImageExtension
    FROM (
      SELECT DISTINCT FileId, FileName, likes, FileImage,ImageExtension
      FROM UploadFiles
    ) AS subquery
    LEFT JOIN episodes e ON subquery.FileId = e.FileId
    ORDER BY subquery.likes DESC
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
