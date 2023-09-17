const { Readable } = require("stream");
var path = require("path");
const { v4: uuidv4 } = require("uuid");
const { uploadBytesToBlobStorage } = require("../Resources/UploadToBlob");
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
