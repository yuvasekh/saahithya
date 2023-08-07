
const { Readable } = require("stream");
var path = require("path");
const { v4: uuidv4 } = require("uuid");
// const multipart = require("parse-multipart");
var mysql = require('mysql2');
const { uploadBytesToBlobStorage } = require("../Resources/UploadToBlob");
const { file } = require("googleapis/build/src/apis/file");
// app.js (or any other main file)
const db = require('../Resources/db');
const { BlobServiceClient } = require("@azure/storage-blob");


module.exports.uploadFiles = async (req, res) => {
    console.log(req.body,"initial")

    let data = req.files;
    // console.log(data[0], "adata",data[1])
    if (data) {

            console.log("fileNames:----->", data[0].originalname);
            var extension = path.extname( data[0].originalname);
            console.log("extension:----->", extension);
         
            var fileContent =  data[0].buffer;
            const imageContent = data[1].buffer;
            console.log(imageContent, "------------------->");
            let Numberofpages=0
            // Assuming you have the Readable stream correctly set up
            let fileStream = Readable.from(fileContent);
            
            let date = new Date();
            console.log(date);
            const formattedTime = date.toISOString().slice(0, 19).replace('T', ' ');
            let pdfId = uuidv4();
            await uploadBytesToBlobStorage(pdfId, fileContent);
            
            const query = `INSERT INTO UploadFiles 
                          VALUES (?, ?, ?,?,?, 0, 0, 0, 0,?,?,?,'syuva893@gmail.com',?,0,?)`;
      
            const values = [pdfId, req.body.BookTitle,req.body.categoryName, req.body.SubCategory, req.body.authorName, req.body.Price,req.body.description,Numberofpages,formattedTime,imageContent];
            
            db.query(query, values, (err, rows) => {
              if (err) {
                console.error('Error executing query:', err.stack);
                return;
              }
              console.log('Query req.body:', rows);
            });
            

        console.log("yuva");
        res.status(200).json({ data: "uploaded" });
    } else {
        res.status(500).json({ message: "There is no data to process" });
        console.log("There is no data to process");
    }
};
