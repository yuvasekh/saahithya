const { Readable } = require("stream");
var path = require("path");
const { v4: uuidv4 } = require("uuid");
const { uploadBytesToBlobStorage,uploadBytesToBlobStorage1 } = require("../Resources/UploadToBlob");
const db = require("../Resources/db");

module.exports.uploadFiles = async (req, res) => {
  console.log(req.headers);
  let categorieArray=req.body.categoryName
  let AuthorCategory=req.body.AuthorCategory
  let splitArray=categorieArray.split(',')
  console.log(splitArray,"splitArray")
  let data = req.files;
  if (data) {
    console.log("fileNames:----->", data[0].originalname);
    var extension = path.extname(data[0].originalname);
    console.log("extension:----->", extension);
    var fileContent = data[0].buffer;
    const imageContent = data[1].buffer;
    console.log(imageContent, "------------------->");
    let Numberofpages = 0;
    let dateString = req.body["Published Year"];
    const date = new Date(dateString);
    const mysqlDatetime = date.toISOString().slice(0, 19).replace("T", " ");
    console.log(date);
    let pdfId = uuidv4();
  
    await uploadBytesToBlobStorage(pdfId, fileContent);
    const query = `INSERT INTO UploadFiles 
                          VALUES (?, ?, ?,?,?, ?, ?, ?, 0,?,?,?,?,?,0,?,?,?,?,?)`;
for(var i=0;i<splitArray.length;i++)
{
  const Likes = Math.floor(Math.random() * 1000);
  const Views = Math.floor(Math.random() * 1000);
  const Rating = 5;
    const values = [
      pdfId,
      req.body.BookTitle,
     splitArray[i],
      req.body.SubCategory,
      req.body.authorName,
      Likes,
      Views,
      Rating,
      req.body.Price,
      req.body.description,
      Numberofpages,
      req.headers.email,
      mysqlDatetime,
      imageContent,
      req.body['BookType'],
      req.body['Book Language'],
      AuthorCategory,
      req.body['Book Excerpt']
    ];
    async function dummy() {
      db.query(query, values, (err, rows) => {
        if (err) {
          console.error("Error executing query:", err.stack);
          return;
        }
        console.log("Query req.body:", rows);
      });
    }
    await dummy();

    console.log("yuva");
  }

    
    res.status(200).json({ data: "uploaded" });
  } else {
    res.status(500).json({ message: "There is no data to process" });
    console.log("There is no data to process");
  }
};

module.exports.deleteFile = async (req, res) => {
    console.log(req.params.id,"paramsId")
    let fileId=req.params.id
    const sql = `
    DELETE FROM uploadfiles WHERE FileId = ?;`;
    const sql1 = `
    DELETE FROM comments WHERE FileId = ?;`;
    const sql2 = `
    DELETE FROM reports WHERE FileId = ?;`;
  // Execute the SQL query
  db.query(sql1, [fileId], (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ message:error });
      // Handle the error and possibly roll back the transaction
    } 
    db.query(sql2, [fileId], (error, results) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ message:error });
        // Handle the error and possibly roll back the transaction
      } 
    db.query(sql, [fileId], (error, results) => {
      if (error) {
        console.error('Error:', error);
        res.status(500).json({ message:error });
        // Handle the error and possibly roll back the transaction
      }
    else {
      console.log('Transaction committed successfully.');
      res.status(200).json({ data: "uploaded" });
      // }
    }})
  })
})
    
       
};

module.exports.uploadNewsFiles = async (req, res) => {
 console.log(req.body)
 let Id= uuidv4()

 if(req.body.file && req.body.title && req.body.mimeType)
 {
  // Base64 encoded string
const base64String = req.body.file;

// Convert to Buffer
const bufferData = Buffer.from(base64String, "base64");

 await uploadBytesToBlobStorage1(Id,req.body.file,req.body.mimeType);
 const values = [
  Id,
  req.body.title,req.body.mimeType,new Date(),100,100]
 const query = `INSERT INTO News 
                          VALUES (?, ?, ?,?,?, ?)`;
 db.query(query, values, (err, rows) => {
  if (err) {
    console.error("Error executing query:", err.stack);
    return;
  }
  console.log("Query req.body:", rows);
  res.status(200).json("suceesfully upload the news")
});
 }
 else
 {
  res.status(500).json("Invalid Body")
 }
 
};

module.exports.getNews = async (req, res) => {
  
  let query = `select *from News`;

  db.query(query, (err, rows) => {
      if (err) {
          console.error('Error executing query:', err); 
          res.status(500).json({message:err})
         
      }
      console.log('Query result for Images:', rows);
      res.status(200).json(rows);
      
  });
  
     
};