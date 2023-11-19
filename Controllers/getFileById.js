const db = require('../Resources/db');
const {verifyToken}=require('../Resources/TokenVerifier')


module.exports.getFileById = async (req, res) => {
    const fileId = req.params.id;
    const token = req.headers.authorization;
    console.log(fileId, "yuvparams");

    try {
        if (!token) {
            return res.status(401).json({ message: "Invalid Token" });
        }

        const decodedToken = await verifyToken(token);

        const fileQuery = `
            SELECT *
            FROM uploadfiles
            LEFT JOIN episodes ON uploadfiles.fileId = episodes.fileId
            WHERE uploadfiles.fileId = ?`;

        const likesQuery = `
            SELECT *
            FROM likes
            WHERE email = ? AND fileId = ?`;

        const likesCountQuery = `SELECT COUNT(*) AS count FROM likes WHERE fileId = ? AND likestatus = 1`;

        // Fetch file information
        const [fileRows] = await db.promise().query(fileQuery, [fileId]);
        console.log(fileQuery)

        // Fetch likes associated with the file
        const [likesRows] = await db.promise().query(likesQuery, [decodedToken.Email, fileId]);

        // Fetch the count of likes for the file
        const [likesCountResult] = await db.promise().query(likesCountQuery, [fileId]);

        console.log('Query result for Images:', fileRows);
        return res.status(200).json({ file: fileRows, likes: likesRows, likeCount: likesCountResult[0].count });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


// Rest of your code remains the same...
module.exports.getSearchRequest = async (req, res) => {
 
    let token = req.headers.authorization;
    console.log(req.body,"search")
    if (token) {
      verifyToken(token)
        .then((decodedToken)=>
        {
            let query = `SELECT * FROM uploadfiles
            WHERE FileName LIKE '${req.body.comment}'
               OR Author LIKE '${req.body.comment}'
               OR BookDescription LIKE '${req.body.comment}'
                  OR Email LIKE '${req.body.comment}';`;
            db.query(query, (err, rows) => {
                if (err) {
                    console.error('Error executing query:', err); 
                    res.status(500).json({message:err})
                   
                }
                console.log('Query result for Images:', rows,query);
                res.status(200).json(rows);
                
            });
        }).catch((error)=>
        {
            res.status(404).json({message:"Invalid user"})
        })
   
}
else{
    res.status(400).json({message:"Bad Request"})
}
    
       
};

module.exports.getFilesByEmail = async (req, res) => {
    console.log(req.headers.authorization, "users");
    let token = req.headers.authorization;
    if (token) {
      verifyToken(token)


        .then((decodedToken)=>
        {
            let query = `select Distinct FileId,FileName from UploadFiles where Email='${decodedToken.Email}'`;
            db.query(query, (err, rows) => {
                if (err) {
                    console.error('Error executing query:', err); 
                    res.status(500).json({message:err})
                   
                }
                console.log('Query result for Images:', rows);
                res.status(200).json(rows);
                
            });
        }).catch((error)=>
        {
            res.status(404).json({message:"Invalid user"})
        })
   
}
else{
    res.status(400).json({message:"Bad Request"})
}
    
       
};
module.exports.getAllFiles = async (req, res) => {
    console.log(req.params.pagecount,"pagecount")
    let query = `SELECT FileId,FileName,CategoryName,SubCategory,Author,Likes,Views,Rating,Email,FileImage,Type
    FROM Uploadfiles
    `;
    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Books:', rows);
        res.status(200).json(rows);
        
    });
    
       
};