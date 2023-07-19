const db = require('../Resources/db');
module.exports.latest = async (req, res) => {
    console.log("latest")

          
    db.query('SELECT * FROM UploadedFiles ORDER BY Publishtime DESC LIMIT 7', (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.stack); 
            res.status(500).json({message:err})
            return;
        }
        res.status(200).json(rows);
        
        console.log('Query result:', rows);
    });
    
       
};
