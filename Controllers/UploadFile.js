const { Readable } = require("stream");
var path = require("path");
const { v4: uuidv4 } = require("uuid");
const {
  uploadBytesToBlobStorage,
  uploadBytesToBlobStorage1,
} = require("../Resources/UploadToBlob");
const db = require("../Resources/db");
const { verifyToken } = require("../Resources/TokenVerifier");

module.exports.uploadFiles = async (req, res) => {
  console.log(req.body);
  let categorieArray = req.body.categoryName;
  let AuthorCategory = req.body.AuthorCategory;
  let splitArray = categorieArray.split(",");
  console.log(splitArray, "splitArray");
  let data = req.files;
  console.log(data);
  let token = req.headers.authorization;
  if (token) {
    verifyToken(token).then(async (decodedToken) => {
      if (data) {
        console.log("fileNames:----->", data[0].originalname);
        var extension = path.extname(data[0].originalname);
        console.log("extension:----->", extension);
        var mimeType = path.extname(data[1].originalname);
        console.log("extension:----->", mimeType);
        let Imageextension;
        switch (mimeType) {
          case "image/jpeg":
            Imageextension = ".jpg";
            break;
          case "video/webm":
            Imageextension = ".webm";
            break;
          case "video/mp4":
            Imageextension = ".mp4";
            break;
          case "image/png":
            Imageextension = ".png";
            break;
          case "image/webp": // Corrected duplicate case
            Imageextension = ".webp";
            break;
          default:
            Imageextension = ".jpg";
        }


        var fileContent = data[0].buffer;
        const imageContent = data[1].buffer;
        console.log(imageContent, "------------------->");
        let Numberofpages = 0;
        let dateString = req.body["PublishedYear"];
        const date = new Date(dateString);
        console.log(dateString, "date");
        const formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
        console.log(formattedDate, "check");
        let pdfId = uuidv4();
        let EpisodeId = uuidv4();
        await uploadBytesToBlobStorage(pdfId, imageContent, mimeType);

        console.log(extension,"extension", "checkmime", Imageextension);
        await uploadBytesToBlobStorage(EpisodeId, fileContent,extension);
        const query = `INSERT INTO UploadFiles 
                                VALUES (?, ?, ?,?,?, ?, ?, ?, 0,?,?,?,?,?,0,?,?,?,?,?,?,?)`;
        const query1 = `INSERT INTO Episodes 
                                VALUES (?, ?, ?,?,?)`;
        const Likes = 0
        const Views = 0
        const Rating = 5;
        const values = [
          pdfId,
          req.body.BookTitle,
          JSON.stringify(splitArray),
          req.body.SubCategory,
          req.body.authorName,
          Likes,
          Views,
          Rating,
          req.body.Price,
          req.body.description,
          Numberofpages,
          decodedToken.Email,
          formattedDate,
          "",
          req.body["BookType"],
          req.body["BookLanguage"],
          AuthorCategory,
          req.body["BookExcerpt"],
          extension,
          mimeType
        ];

        db.query(query, values, (err, rows) => {
          if (err) {
            console.error("Error executing query:", err.stack);
            return;
          }
          db.query(
            query1,
            [EpisodeId, pdfId, decodedToken.Email, req.body["BookExcerpt"], 1],
            (err, rows) => {
              if (err) {
                console.error("Error executing query:", err.stack);
                return;
              }
              console.log("sucess");
            }
          );
          res.status(200).json({ data: "uploaded" });
          console.log("Query req.body:", rows);
        });

    
      } else {
        res.status(500).json({ message: "There is no data to process" });
        console.log("There is no data to process");
      }
    });
  } else {
    res.status(401).json("unAuthorized");
  }
};

module.exports.uploadExistingFiles = async (req, res) => {
  console.log(req.body);
  console.log(req.files);
  let data = req.files;
  let FileId = req.body.FileId;
  let token = req.headers.authorization;
  if (token) {
    verifyToken(token).then(async (decodedToken) => {
      if (data) {
        console.log("fileNames:----->", data[0].originalname);
        var extension = path.extname(data[0].originalname);
        console.log("extension:----->", extension);
        var fileContent = data[0].buffer;
        let EpisodeId = uuidv4();
        console.log(EpisodeId, "episode")
        await uploadBytesToBlobStorage(EpisodeId, fileContent);
        const query1 = `INSERT INTO Episodes 
                                VALUES (?, ?, ?,?,?)`;
        db.query(
          query1,
          [
            EpisodeId,
            FileId,
            decodedToken.Email,
            req.body["BookExcerpt"],
            req.body["EpisodeNumber"],
          ],
          (err, rows) => {
            if (err) {
              console.error("Error executing query:", err.stack);
              return;
            }
            console.log("sucess");
          }
        );

        res.status(200).json({ data: "uploaded" });
      } else {
        res.status(500).json({ message: "There is no data to process" });
        console.log("There is no data to process");
      }
    });
  } else {
    res.status(401).json("unAuthorized");
  }
};
module.exports.deleteFile = async (req, res) => {
  console.log(req.params.id, "paramsId");
  let fileId = req.params.id;
  const sql = `
    DELETE FROM uploadfiles WHERE FileId = ?;`;
  const sql1 = `
    DELETE FROM comments WHERE FileId = ?;`;
  const sql2 = `
    DELETE FROM reports WHERE FileId = ?;`;
    const sql3 = `
    DELETE FROM episodes WHERE FileId = ?;`;
  // Execute the SQL query
  db.query(sql1, [fileId], (error, results) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ message: error });
      // Handle the error and possibly roll back the transaction
    }
    db.query(sql2, [fileId], (error, results) => {
      if (error) {
        console.error("Error:", error);
        res.status(500).json({ message: error });
        // Handle the error and possibly roll back the transaction
      }
      db.query(sql3, [fileId], (error, results) => {
        if (error) {
          console.error("Error:", error);
          res.status(500).json({ message: error });
          // Handle the error and possibly roll back the transaction
        } else {
          db.query(sql, [fileId], (error, results) => {
            if (error) {
              console.error("Error:", error);
              res.status(500).json({ message: error });
              // Handle the error and possibly roll back the transaction
            } 
            console.log("Book Deleted successfully.");
            res.status(200).json({ data: "uploaded" });
          })
      
          // }
        }
      });
    });
  });
};

module.exports.uploadNewsFiles = async (req, res) => {
  console.log(req.body);
  let Id = uuidv4();

  if (req.body.file && req.body.title && req.body.mimeType) {
    // Base64 encoded string
    const base64String = req.body.file;

    // Convert to Buffer
    const bufferData = Buffer.from(base64String, "base64");

    await uploadBytesToBlobStorage1(Id, req.body.file, req.body.mimeType);
    const values = [
      Id,
      req.body.title,
      req.body.mimeType,
      new Date(),
      100,
      100,
    ];
    const query = `INSERT INTO News 
                          VALUES (?, ?, ?,?,?, ?)`;
    db.query(query, values, (err, rows) => {
      if (err) {
        console.error("Error executing query:", err.stack);
        return;
      }
      console.log("Query req.body:", rows);
      res.status(200).json("suceesfully upload the news");
    });
  } else {
    res.status(500).json("Invalid Body");
  }
};

module.exports.getNews = async (req, res) => {
  let query = `select *from News`;

  db.query(query, (err, rows) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ message: err });
    }
    console.log("Query result for Images:", rows);
    res.status(200).json(rows);
  });
};
