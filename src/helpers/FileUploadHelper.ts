import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';

cloudinary.config({
  cloud_name: 'dvi9q02vy',
  api_key: '823569831935617',
  api_secret: '0SzlTmrWJdzOzHG3YwEMXW7EQoQ'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, { public_id: file.originalname }, (error, result) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploaderHelper = { uploadToCloudinary, upload };
