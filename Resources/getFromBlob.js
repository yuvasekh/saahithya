const { BlobServiceClient } = require("@azure/storage-blob");
const fs = require("fs");

async function downloadTextFile(containerName, blobName, destinationFilePath) {
  // Enter your storage account name and connection string here
  const connectionString = "DefaultEndpointsProtocol=https;AccountName=<YOUR_STORAGE_ACCOUNT_NAME>;AccountKey=<YOUR_STORAGE_ACCOUNT_KEY>;EndpointSuffix=core.windows.net";
  
  // Create a BlobServiceClient using the connection string
  const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

  // Get a reference to a container
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Get a block blob client and download the blob
  const blobClient = containerClient.getBlockBlobClient(blobName);

  try {
    // Download the blob to the specified file destination
    await blobClient.downloadToFile(destinationFilePath);
    console.log("File downloaded successfully.");
  } catch (error) {
    console.error("Error downloading the blob:", error);
  }
}

// Usage example
const containerName = "your-container-name";
const blobName = "your-blob-name.pdf";
const destinationFilePath = "./downloads/your-file.pdf";

downloadTextFile(containerName, blobName, destinationFilePath);
module.exports.downloadTextFile=downloadTextFile