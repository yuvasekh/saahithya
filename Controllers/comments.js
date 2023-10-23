const db = require('../Resources/db');
const { v4: uuidv4 } = require("uuid");
module.exports.comments = async (req, res) => {
    let CommentId = uuidv4();
    console.log(req.params.id,"paramsId",req.body)
    
    let token = req.headers.authorization;
    if (token) {
      verifyToken(token).then(async (decodedToken) => {
        let checkuserquery=`select * from register where Email='${decodedToken.Email}'`
        let commentssquery = `select CategoryName from uploadfiles where FileId='${req.params.id}'`;
        const insertQuery = 'INSERT INTO comments  VALUES (?, ?, ?, ?, ?)';
    
        db.query(checkuserquery, async (error, results) => {
            if (error) {
              throw error;
            }
            console.log(results,"userscount")
            if(results.length>0)
            {
                db.query(insertQuery, [CommentId,decodedToken.Email,req.params.id,req.body.comment,new Date()],async (error, results) => {
                    if (error) {
                        console.log(error)
                      throw error;
                    }
                    console.log('Comment item inserted successfully.',results);
                    res.status(200).json("Comment added");
                 
                });
            }
        else
        {
            res.status(500).json({message:"Invalid User"})
        }
        })
      })}
  
    
       
};
module.exports.getcomments = async (req, res) => {
    console.log(req.params.id,"paramsId")
    let query = `select * from comments where FileId='${req.params.id}' ORDER BY CreatedAt;`;

    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Images:', rows);
        res.status(200).json(rows);
        
    });
    
       
};

module.exports.reports = async (req, res) => {
    let CommentId = uuidv4();
    console.log(req.params.id,"paramsId",req.body)
    let token = req.headers.authorization;
  if (token) {
    verifyToken(token).then(async (decodedToken) => {
        let checkuserquery=`select * from register where Email='${decodedToken.Email}'`
        let commentssquery = `select CategoryName from uploadfiles where FileId='${req.params.id}'`;
        const insertQuery = 'INSERT INTO comments  VALUES (?, ?, ?, ?, ?)';
    
        db.query(checkuserquery, async (error, results) => {
            if (error) {
              throw error;
            }
            console.log(results,"userscount")
            if(results.length>0)
            {
                db.query(insertQuery, [CommentId,decodedToken.Email,req.params.id,req.body.comment,new Date()],async (error, results) => {
                    if (error) {
                        console.log(error)
                      throw error;
                    }
                    console.log('Comment item inserted successfully.',results);
                    res.status(200).json("Comment added");
                 
                });
            }
        else
        {
            res.status(500).json({message:"Invalid User"})
        }
        })
    })}
  
    
       
};
module.exports.getreports = async (req, res) => {
    console.log(req.params.id,"paramsId")
    let query = `select * from reports ORDER BY CreatedAt;`;

    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Images:', rows);
        res.status(200).json(rows);
        
    });
    
       
};

module.exports.getTopComments = async (req, res) => {
console.log("top comments")
    let query = `SELECT DISTINCT uploadfiles.*
    FROM uploadfiles
    JOIN (
        SELECT FileId, COUNT(*) AS CommentCount
        FROM comments
        GROUP BY FileId
        ORDER BY CommentCount DESC
        LIMIT 10
    ) AS top_file
    ON uploadfiles.FileId = top_file.FileId;
    `;

    db.query(query, (err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            res.status(500).json({message:err})
           
        }
        console.log('Query result for Images For Top  Comments:', rows);
        res.status(200).json(rows);
        
    });
    
       
};