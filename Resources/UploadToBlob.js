const { BlobServiceClient } = require("@azure/storage-blob");
async function uploadBytesToBlobStorage(blobname,fileContent) {
  console.log(blobname,"inside")
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
  const { BlobServiceClient } = require("@azure/storage-blob");
async function uploadBytesToBlobStorage1(blobname,fileContent,mimeType) {
  let extension;
  if(mimeType=="image/jpeg")
  {
extension=".jpg"
  }
  if(mimeType=="video/webm")
  {
extension=".webm"
  }
  else
  {
    extension="pdf"
  }
  console.log(blobname,"inside")
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
    const blockBlobClient = containerClient.getBlockBlobClient(blobname+extension);
    await blockBlobClient.uploadData(fileContent);
    console.log(`Bytes uploaded successfully to blob storage.`);
  }
  module.exports.uploadBytesToBlobStorage1=uploadBytesToBlobStorage1
  module.exports.uploadBytesToBlobStorage=uploadBytesToBlobStorage