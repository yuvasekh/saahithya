const db = require('../Resources/db');
const {ForgotEmailSent}=require('../Resources/Emailsent')
const { v4: uuidv4 } = require("uuid");
module.exports.forgotpassword = async (req, res) => {
    const { email } = req.body;
    let Id = uuidv4();
    let date=new Date()
if(email)
{
    const query = 'SELECT * FROM register WHERE Email = ?';
    const sql = 'INSERT INTO resetpassword (Id, Email, DateTime) VALUES (?, ?, ?)';
    db.query(query, [email], async(err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            // res.status(500).json({message:err})
            return;
        }
        if(rows.length>0)
        {
            let link=`http://localhost:5173/resetpassword/${Id}`
            await ForgotEmailSent(email,link)
            db.query(sql, [Id, email, date], (err, result) => {
                if (err) {
                  console.error('Error executing query:', err);
                  throw err;
                }
            
                res.status(200).json({message:"Reset Link sent"});
            })
           

        }
        else
        {
            res.status(400).json({message:"Invalid Email"});
        }
 
        
    });
}
else
{
    res.status(500).json({message:"Invalid Body"});
}
   
    
       
};
module.exports.resetpassword = async (req, res) => {
    const { Id,newPassword } = req.body;
    console.log(req.body)
   
if(Id)
{
    const query = 'SELECT * FROM resetpassword WHERE Id = ?';
    try
    {
    db.query(query, [Id], async(err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            // res.status(500).json({message:err})
            return;
            res.status(400).json({message:"Invalid Url"});
        }
        else
        {
        if(rows.length<=0)
        {
            console.log(rows,"checkit",rows.length)
            res.status(400).json({message:"Invalid Url"});
        }
        else
        {
   console.log(rows,"else",rows.length)
    const givenTime = new Date(rows[0].DateTime);
   const currentTime = new Date(); // This gets the current time
   const differenceInMilliseconds = currentTime - givenTime;
   const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
   console.log(givenTime,differenceInMinutes,"diff")
   if (differenceInMinutes > 5) {
  console.log('The given time is more than 5 minutes from the current time.');
  res.status(400).json({message:"Link Expired"});

} else {
  console.log('The given time is 5 minutes or less from the current time.');
  const updatequery = `update register set password='${newPassword}' WHERE Email = ?`;

  db.query(updatequery, [rows[0].Email], async(err, rows) => {
    if (err) {
        console.error('Error executing query:', err); 
        // res.status(500).json({message:err})
        return;
    }
    const deletequery = 'DELETE FROM resetpassword WHERE Id = ?';
    db.query(deletequery, [Id], async(err, rows) => {
        if (err) {
            console.error('Error executing query:', err); 
            // res.status(500).json({message:err})
            return;
        }
        res.status(200).json({message:"Password Updated"});
    })
   
})

}

        }
    }
    });
}
catch(error)
{
    res.status(500).json({message:error});
}
}
else
{
    
}
   
    
       
};
