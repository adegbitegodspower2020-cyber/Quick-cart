// uploadimages
// Sends every product in a folder on your computer to cloudinary, into "quickcart/products"
// A file called "smart-watch-ultra-1.jpeg" becomes the photo "quickcart/products/smart-watch-ultra-1"

import {
  CLOUDINARY_MISSING,
  isCloudinaryReady,
  PHOTO_FOLDER,
  photoUrl,
  uploadPhoto,
} from "../config/cloudinary";
import fs from "fs";
import path from "path";

// STEP 11 : put the demo products on cloudinary
// Run it from the server folder: npm run upload-images -- "C:/Users/users/Desktop/quickcart-product-photos"
// Everything after "--" is handled to this script; process.argv[2] is the folder

// Only these files types are photos; anything else in the folder (e.g desktop.ini) is skipped
const PHOTO_TYPES = [".jpg", ".jpeg", ".png", ".webp"];

const uploadImages = async () => {
  const folder = process.argv[2];

  //    1. check we have everything before we start
  if (!folder) {
    console.error(
      `Say where the photos are: npm run upload-images -- "C:/path/to/photos"`,
    );
  }

  if (!isCloudinaryReady) {
    console.error(CLOUDINARY_MISSING);
    process.exit(1);
  }

  if (!fs.existsSync(folder)) {
    console.error(`Folder not found: ${folder}`);
    process.exit(1);
  }

  const files = fs.readdirSync(folder).filter((file) => {
    return PHOTO_TYPES.includes(path.extname(file).toLowerCase());
  });

  console.log(`Uploading ${files.length} photos to Cloudinary...`);

  //   3. upload
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    // "smart-watch-ultra"
    const name = path.parse(file).name.trim().toLowerCase();
    const bytes = fs.readFileSync(path.join(folder, file));

    try {
      const publicId = await uploadPhoto(bytes, `${PHOTO_FOLDER}/${name}`);
      uploaded++;
      console.log(`${uploaded}/${files.length} ${photoUrl(publicId)}`);
    } catch (error) {
      failed++;
      console.error(`failed: ${file} -> ${(error as Error).message}`);
    }
  }
  console.log(`Done: ${uploaded} uploaded, ${failed} failed.`);
};

uploadImages();
