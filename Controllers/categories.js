const db = require('../Resources/db');
module.exports.categories = async (req, res) => {
    console.log(req.body,"category??????????????/")
   
    let requestdata=req.body
let query=`SELECT *
FROM uploadfiles
WHERE JSON_SEARCH(CategoryName, 'one', '${requestdata.category.category}') IS NOT NULL and BookLanguage='${requestdata.category.languageandtype.language}' and Type='${requestdata.category.languageandtype.BookType}' and SubCategory='${requestdata.subcategory}'`
    // let query = `select * from UploadFiles where CategoryName='${requestdata.category.category}' and BookLanguage='${requestdata.category.languageandtype.language}' and Type='${requestdata.category.languageandtype.BookType}' and SubCategory='${requestdata.subcategory}'`;

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
