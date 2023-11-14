const { BlobServiceClient } = require("@azure/storage-blob");
const fs = require("fs");

async function downloadTextFile(FileId) {
  // Enter your storage account name and connection string here
  const connectionString =
    "DefaultEndpointsProtocol=https;AccountName=saahithyapdffiles;AccountKey=FTfLKISSRTsofZ9GP3YCGuOxclz//ORfSDlhW3/JL7bLYVlTlbuTHtXBStwZ6dF0VsXEK7IErH1R+AStganC6w==;EndpointSuffix=core.windows.net";

  // Create a BlobServiceClient using the connection string
  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);

  // Get a reference to a container
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Get a block blob client and download the blob
  const blobClient = containerClient.getBlockBlobClient(FileId + ".pdf");

  try {
    // Download the blob to the specified file destination
    await blobClient.downloadToFile(destinationFilePath);
    console.log("File downloaded successfully.");
  } catch (error) {
    console.error("Error downloading the blob:", error);
  }
}

// Usage example
const containerName = "uploadfilessaahithya";
const blobName = "your-blob-name.pdf";
const destinationFilePath = "./downloads/your-file.pdf";

downloadTextFile("123");
module.exports.downloadTextFile = downloadTextFile;
