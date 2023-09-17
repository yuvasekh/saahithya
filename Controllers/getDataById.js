const db = require('../Resources/db');
const {downloadTextFile} = require('../Resources/getFromBlob')
module.exports.getDataById = async (req, res) => {
    console.log(req.body.FileId,"check")
    var FileId = req.body.FileId
 
if(FileId!==undefined)
{
    var result=await downloadTextFile(FileId)
    res.status(200).json(result)
}
//ok
    // db.query(`select * from UploadFiles where Id='${FileId}')`, (err, rows) => {
    //     if (err) {
    //         console.error('Error executing query:', err.stack);
    //         res.status(500).json({ message: err })
    //         return;

    //     }
    //     res.status(200).json(rows)
    //     console.log('Query req.body:', rows);
    // });

};
