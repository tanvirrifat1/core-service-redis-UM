import { Request } from 'express';
import { FileUploaderHelper } from '../../../helpers/FileUploadHelper';

const createStudent = async (req: Request) => {
  const file = req.file;
  const uploadImage = await FileUploaderHelper.uploadToCloudinary(file);
  console.log(uploadImage);
};

export const UserService = { createStudent };
