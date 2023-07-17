const { BlobServiceClient } = require("@azure/storage-blob");
async function uploadBytesToBlobStorage(blobname,fileContent) {
    const connectionString = process.env.connectionString;
    let containerName=process.env.containerName
    console.log(connectionString,"ccccccccccccccccccc")
    console.log(containerName,"com-------------------------->>>>>>>>>>>>")
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      connectionString
    );
    const containerClient = blobServiceClient.getContainerClient(
      containerName
    );
    const blockBlobClient = containerClient.getBlockBlobClient(blobname+".pdf");
    await blockBlobClient.uploadData(fileContent);
    console.log(`Bytes uploaded successfully to blob storage.`);
  }
  module.exports.uploadBytesToBlobStorage=uploadBytesToBlobStorage