const db = require('../Resources/db');
// const {downloadTextFile} = require('../Resources/getFromBlob')
module.exports.getDataById = async (req, res) => {
    var FileId = "4dc0ef71-447e-431a-9fc3-2c7fa9fc8007"
    console.log(FileId, "uuuu")

// var result=await downloadTextFile(FileId)
res.status(200).json(result)
    // db.query(`select * from UploadedFiles where Id='${FileId}')`, (err, rows) => {
    //     if (err) {
    //         console.error('Error executing query:', err.stack);
    //         res.status(500).json({ message: err })
    //         return;

    //     }
    //     res.status(200).json(rows)
    //     console.log('Query req.body:', rows);
    // });

};
