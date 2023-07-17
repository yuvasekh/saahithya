
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
    // console.log(req.body)

    let data = req.files;
    console.log(data[0], "adata",data[1])
    if (data) {

            console.log("fileNames:----->", data[0].originalname);
            var extension = path.extname( data[0].originalname);
            console.log("extension:----->", extension);
         
            var fileContent =  data[0].buffer;
            const imageContent = data[1].buffer;
            console.log(imageContent, "------------------->");
            
            // Assuming you have the Readable stream correctly set up
            let fileStream = Readable.from(fileContent);
            
            let date = new Date();
            console.log(date);
            const formattedTime = date.toISOString().slice(0, 19).replace('T', ' ');
            let pdfId = uuidv4();
            await uploadBytesToBlobStorage(pdfId, fileContent);
            
            const query = `INSERT INTO UploadedFiles 
                          VALUES (?, ?, ?, ?, 0, 0, 0, 0, 'hari24vsm@gmail.com', ?, ?)`;
            
            const values = [pdfId, req.body.originalname, req.body.categoryName, req.body.authorName, imageContent, formattedTime];
            
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
