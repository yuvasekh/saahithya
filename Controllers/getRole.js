
const db = require('../Resources/db');
module.exports.getRole = async (req, res) => {
    console.log(req.params.id,"paramsId")
    let query = `select Role from Register where Email='${req.params.Email}'`;

    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Role:', rows);
        res.status(200).json(rows);
        
    });
    
       
};