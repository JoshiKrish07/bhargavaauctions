import cloudinary from "cloudinary";

// Cloudinary configurations
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads an image to Cloudinary.
 * @param {Buffer} imageBuffer - The image buffer to upload.
 * @param {string} publicId - Optional public ID for the image.
 * @returns {Promise<object>} - The Cloudinary upload result.
 */

const uploadImgToCloudinary = async (imageBuffer, publicId) => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: 'auto', public_id: publicId },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      );
  
      uploadStream.end(imageBuffer);
    });
  };
  
  export default uploadImgToCloudinary ;