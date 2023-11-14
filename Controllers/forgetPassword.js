const db = require('../Resources/db');
module.exports.forgotpassword = async (req, res) => {
    console.log(req.body,"authorcategory??????????????/")
   
    let requestdata=req.body

    let query = `select * from register where Email=${req.body.email}`;

    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            // res.status(500).json({message:err})
            return;
        }
        if(rows)
        {
            
        }
        console.log('Query result:', rows);
        res.status(200).json(rows);
        
    });
    
       
};
module.exports.forgotpassword = async (req, res) => {
    console.log(req.body,"authorcategory??????????????/")
   
    let requestdata=req.body

    let query = `update register set password=${req.body.password}`;

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