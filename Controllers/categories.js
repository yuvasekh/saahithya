const db = require('../Resources/db');
module.exports.categories = async (req, res) => {
    console.log(req.params.categoryname,"category??????????????/")
   
    let categories=req.params.categoryname

          console.log(`select * from UploadFiles where CategoryName='${categories}'`)
    db.query(`select * from UploadFiles where CategoryName='${categories}'`, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            // res.status(500).json({message:err})
            return;
        }
        console.log('Query result:', rows);
        res.status(200).json(rows);
        
    });
    
       
};
