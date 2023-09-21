const db = require('../Resources/db');
module.exports.getFileById = async (req, res) => {
    console.log(req.params.id,"paramsId")
    let query = `select * from uploadfiles where FileId='${req.params.id}'`;
    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Images:', rows);
        res.status(200).json(rows);
        
    });
    
       
};