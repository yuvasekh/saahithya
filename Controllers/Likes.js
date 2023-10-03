const db = require('../Resources/db');
const {verifyToken}=require('../Resources/TokenVerifier')
module.exports.latest = async (req, res) => {
    console.log("latest") 
    db.query('SELECT * FROM UploadFiles ORDER BY PublishedTime DESC LIMIT 7', (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.stack); 
            res.status(500).json({message:err})
            return;
        }
        res.status(200).json(rows);
        
        console.log('Query result:', rows);
    });     
};
module.exports.likes = async (req, res) => {
    console.log(req.body,"rating")
    // console.log(req.headers.authorization, "HHHH");
    let token = req.headers.authorization;
    if (token) {    
      verifyToken(token)
        .then((decodedToken) => {
        //   console.log(decodedToken, "veriii");
          const selectQuery = `SELECT COUNT(*) AS count FROM Register WHERE email ='${decodedToken.Email}'`;
          const ratingcheck = `SELECT COUNT(*) AS count FROM likes WHERE email ='${decodedToken.Email}' and FileId='${req.body.FileId}'`;
          console.log(selectQuery, "test");
          const getLikes=`select Likes from UploadFiles where FileId='${req.body.FileId}'`
          const insertQuery = "INSERT INTO likes  VALUES (?, ?)";
          db.query(selectQuery, async (error, results) => {
            if (error) {
              throw error; 
            }
            if (results[0].count == 1) {
                db.query(ratingcheck, async (error, results) => {
                    if (error) {
                      res.status(404).json({ message: "User Not Exists" });
                      throw error;
                    }
                    if (results[0].count <= 0) {
                        db.query(
                            insertQuery,
                            [req.body.FileId,decodedToken.Email],
                            async (error, results) => {
                              if (error) {
                                throw error;
                              }
                              db.query(
                                getLikes,
                                async (error, results) => {
                                  if (error) {
                                    throw error;
                                  }
                                  console.log(results,"checkrate")
                                  let avglikes;
                                  if(req.body.likestatus==true)
                                  {
                                    avglikes=results[0].Likes+1
                                  }
                                  else
                                  {
                                     avglikes=results[0].Likes-1
                                  }
                                
                                console.log(avglikes,"checklikes")
                                  db.query(`update UploadFiles set Likes=${avglikes} where FileId='${req.body.FileId}'`,
                                    async (error, results) => {
                                      if (error) {
                                        throw error;
                                      }
                                      console.log("Rated SucessFully");
                                      res.status(200).json({ message: "Rated SucessFully" });
                                    }
                                  );
                               
                                }
                              );
                              
                            }
                          );
                         
                    }
                    else {
                        res.status(409).json({ message: "User Not Exists" });
                      }
                })
            } else {
              res.status(404).json({ status: 404, message: "User Not Exists" });
            }
  
            return results;
          });
        })
        .catch((error) => {
          res.status(401).json({ message: "Invalid Token" });
          console.log(error);
        });
    } else {
      res.status(400).json({ message: "Need  Token" });
    }
  };
  module.exports.rating = async (req, res) => {
    console.log(req.body,"rating")
    // console.log(req.headers.authorization, "HHHH");
    let token = req.headers.authorization;
    if (token) {
      verifyToken(token)
        .then((decodedToken) => {
          console.log(decodedToken, "veriii");
          let data = req.body;
          console.log(data["textarea-1"]);
       
          const selectQuery = `SELECT COUNT(*) AS count FROM Register WHERE email ='${decodedToken.Email}'`;
          const ratingcheck = `SELECT COUNT(*) AS count FROM rating WHERE email ='${decodedToken.Email}' and FileId='${req.body.FileId}'`;
          console.log(selectQuery, "test");
          const getrating=`select Rating from UploadFiles where FileId='${req.body.FileId}'`
          const insertQuery = "INSERT INTO rating  VALUES (?, ?,?)";
          
  
          db.query(selectQuery, async (error, results) => {
            if (error) {
              throw error;
              
            }
            if (results[0].count == 1) {
                db.query(ratingcheck, async (error, results) => {
                    console.log(results,"ratttt")
                    if (error) {
                      throw error;
                    }
                    if (results[0].count <= 0) {
                        db.query(
                            insertQuery,
                            [req.body.FileId,decodedToken.Email, req.body.rating],
                            async (error, results) => {
                              if (error) {
                                throw error;
                              }
                              db.query(
                                getrating,
                                [req.body.FileId,decodedToken.Email, req.body.rating],
                                async (error, results) => {
                                  if (error) {
                                    throw error;
                                  }
                                  console.log(results,"checkrate")
                                  let avgrating=results[0].Rating+req.body.rating
                                  let totrating=avgrating/2
                                  db.query(`update UploadFiles set Rating=${totrating} where FileId='${req.body.FileId}'`,
                                    async (error, results) => {
                                      if (error) {
                                        throw error;
                                      }
                                      console.log("Rated SucessFully");
                                      res.status(200).json({ message: "Rated SucessFully" });
                                    }
                                  );
                               
                                }
                              );
                              
                            }
                          );
                         
                    }
                    else
                    {
                        res.status(409).json({ message: "Already Rated" });
                    }
                })
            } else {
              res.status(404).json({ status: 404, message: "User Not Exists" });
            }
  
            return results;
          });
        })
        .catch((error) => {
          res.status(401).json({ message: "Invalid Token" });
          console.log(error);
        });
    } else {
      res.status(400).json({ message: "Need  Token" });
    }
  };
// const db = require('../Resources/db');
// module.exports.latest = async (req, res) => {
//     console.log("latest")

          
//   // Endpoint to add a new like or dislike or switch between them

//     const { user_id, item_id, type } = req.body;
  
//     // Check if type is 'like' or 'dislike'
//     if (!['like', 'dislike'].includes(type)) {
//       return res.status(400).json({ error: 'Invalid type. Type must be "like" or "dislike".' });
//     }
  
//     // Check if the user has already liked/disliked the item
//     const checkQuery = 'SELECT type FROM likes_dislikes WHERE user_id = ? AND item_id = ?';
//     db.query(checkQuery, [user_id, item_id], (checkErr, checkResults) => {
//       if (checkErr) {
//         console.error(checkErr);
//         return res.status(500).json({ error: 'Failed to check like/dislike from the database.' });
//       }
  
//       if (checkResults.length > 0) {
//         // User has already liked/disliked the item, so switch between like and dislike
//         const existingType = checkResults[0].type;
//         if (existingType === type) {
//           // User is trying to like/dislike the same item again, return success without making any changes
//           return res.status(200).json({ message: 'User already liked/disliked the item.' });
//         }
  
//         // Switch the like/dislike type
//         const updateQuery = 'UPDATE likes_dislikes SET type = ? WHERE user_id = ? AND item_id = ?';
//         db.query(updateQuery, [type, user_id, item_id], (updateErr) => {
//           if (updateErr) {
//             console.error(updateErr);
//             return res.status(500).json({ error: 'Failed to update like/dislike in the database.' });
//           }
//           return res.status(200).json({ message: 'Successfully switched like/dislike.' });
//         });
//       } else {
//         // User has not liked/disliked the item before, insert the new like/dislike into the database
//         const insertQuery = 'INSERT INTO likes_dislikes (user_id, item_id, type) VALUES (?, ?, ?)';
//         db.query(insertQuery, [user_id, item_id, type], (insertErr) => {
//           if (insertErr) {
//             console.error(insertErr);
//             return res.status(500).json({ error: 'Failed to insert like/dislike into the database.' });
//           }
//           return res.status(200).json({ message: 'Successfully added like/dislike.' });
//         });
//       }
//     });
  
  
    
       
// };
