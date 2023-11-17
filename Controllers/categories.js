const db = require('../Resources/db');
module.exports.categories = async (req, res) => {
    console.log(req.body,"category??????????????/")
   
    let requestdata=req.body
    console.log(requestdata.languageandtype.category,'categoryItem')
    console.log(requestdata.languageandtype)
let query=`SELECT e.*, u.fileId AS uploadfile_fileId, u.ImageExtension,u.FileName
FROM episodes e
INNER JOIN uploadfiles u ON e.fileId = u.fileId
WHERE u.fileId IN (
    SELECT u2.fileId
    FROM uploadfiles u2
    WHERE JSON_SEARCH(u2.CategoryName, 'one', '${requestdata.category}') IS NOT NULL
      AND u2.BookLanguage = '${requestdata.languageandtype.category.language}'
      AND u2.Type = '${requestdata.languageandtype.category.BookType}'
      AND u2.SubCategory = '${requestdata.languageandtype.subcategory}'
);`
console.log(query,'hari')
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
