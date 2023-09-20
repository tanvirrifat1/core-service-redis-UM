import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dvi9q02vy',
  api_key: '823569831935617',
  api_secret: '0SzlTmrWJdzOzHG3YwEMXW7EQoQ'
});

const uploadToCloudinary = async () => {
  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    }
  );
};
