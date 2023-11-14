const { BlobServiceClient } = require("@azure/storage-blob");
async function uploadBytesToBlobStorage(blobname,fileContent,extension) {
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
    let blockBlobClient
    if(extension)
    {
       blockBlobClient = containerClient.getBlockBlobClient(blobname+extension);
    }
   else
   {
     blockBlobClient = containerClient.getBlockBlobClient(blobname+".pdf");
   }
    await blockBlobClient.uploadData(fileContent);
    console.log(`Bytes uploaded successfully to blob storage.`);
  }

async function uploadBytesToBlobStorage1(blobname,fileContent,mimeType) {
  let extension;
  console.log(mimeType,"checkmime")
  if(mimeType=="image/jpeg")
  {
extension=".jpg"
  }
 else if(mimeType=="video/webm")
  {
extension=".webm"
  }
  else if(mimeType=="video/mp4")
  {
    extension=".mp4"
  }
  else if(mimeType=="image/png")
  {
    extension=".png"
  }
  else if(mimeType=="image/png")
  {
    extension=".webp"
  }
  else
  {
    extension="pdf"
  }
  console.log(blobname,"inside",extension)
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
    const parts = fileContent.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const base64Data = parts[1];
    
    // Convert Base64 to bytes (Buffer)
    const buffer = Buffer.from(base64Data, 'base64');


// Now 'buffer' contains the bytes
console.log(buffer);
    await blockBlobClient.uploadData(buffer);
    console.log(`Bytes uploaded successfully to blob storage.`);
  }
  module.exports.uploadBytesToBlobStorage1=uploadBytesToBlobStorage1
  module.exports.uploadBytesToBlobStorage=uploadBytesToBlobStorage