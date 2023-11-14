import React, { useEffect, useState } from 'react';

const BufferToImage = ({ binaryData }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!binaryData) return;

    // Create a Blob from the Uint8Array data
    const blob = new Blob([binaryData], { type: 'image/jpeg' }); // Replace 'image/jpeg' with the appropriate MIME type if needed

    // Convert Blob to data URL
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(blob);
  }, [binaryData]);

  if (!imageSrc) return <div>Loading...</div>;

  return <img src={imageSrc} alt="Converted Binary Data" />;
};

export default BufferToImage;
