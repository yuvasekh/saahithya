const db = require('../Resources/db');
module.exports.getData = async (req, res) => {

          
    db.query('select * from UploadFiles', (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.stack); 
            // res.status(500).json({message:err})
            return;
        }
        res.status(200).json(rows);
        console.log('Query result:', rows);
    });
    
       
};
