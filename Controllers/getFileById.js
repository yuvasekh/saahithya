const db = require('../Resources/db');
const {verifyToken}=require('../Resources/TokenVerifier')

module.exports.getFileById = async (req, res) => {
    const fileId = req.params.id;
    const token = req.headers.authorization;

    console.log(fileId, "paramsId");

    if (!token) {
        return res.status(401).json({ message: "Invalid Token" });
    }

    try {
        const decodedToken = await verifyToken(token);

        let fileQuery = `
            SELECT *
            FROM uploadfiles
            LEFT JOIN episodes ON uploadfiles.fileId = episodes.fileId
            WHERE uploadfiles.fileId= ?`;

        let likesQuery = `
            SELECT *
            FROM likes
            WHERE email = ? AND fileId = ?`;
        
        const likesCountQuery = `SELECT COUNT(*) AS count FROM likes WHERE FileId = ? and likestatus=1`;

        db.query(fileQuery, [fileId], async (fileErr, fileRows) => {
            if (fileErr) {
                console.error('Error executing file query:', fileErr);
                return res.status(500).json({ message: fileErr });
            }

            const likesRows = await db.promise().query(likesQuery, [decodedToken.Email, fileId]);

            db.query(likesCountQuery, [fileId], async (likesCountErr, likesCountResult) => {
                if (likesCountErr) {
                    console.error('Error executing likes count query:', likesCountErr);
                    return res.status(500).json({ message: likesCountErr });
                }

                console.log('Query result for Images:', fileRows);
                return res.status(200).json({ file: fileRows, likes: likesRows[0], likeCount: likesCountResult[0].count });
            });
        });
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ message: "Invalid Token" });
    }
};

// Rest of your code remains the same...


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