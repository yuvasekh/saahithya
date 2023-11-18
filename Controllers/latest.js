const db = require('../Resources/db');
module.exports.latest = async (req, res) => {
    console.log("latestdata")
    try
    {
    db.query(`SELECT FileId, FileName,FileImage,ImageExtension
    FROM (
      SELECT DISTINCT FileId, FileName, PublishedTime,FileImage,ImageExtension
      FROM UploadFiles
    ) AS subquery
    ORDER BY PublishedTime DESC
    LIMIT 7;;`, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.stack); 
            res.status(500).json({message:err})
            return;
        }
        console.log('Query result:', rows);
        res.status(200).json(rows);
       
    });
}
catch(error)
{
    console.log(error,"latesterror")
}
    
       
};
