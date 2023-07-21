const db = require('../Resources/db');
module.exports.latest = async (req, res) => {
    console.log("latest")

          
    db.query('SELECT * FROM UploadedFiles ORDER BY Publishtime DESC LIMIT 7', (err, rows) => {
        if (err) {
            console.error('Error executing query:', err.stack); 
            res.status(500).json({message:err})
            return;
        }
        res.status(200).json(rows);
        
        console.log('Query result:', rows);
    });
    
       
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
