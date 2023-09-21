import { Response, Request, NextFunction } from 'express';
import { FileUploaderHelper } from '../../../helpers/FileUploadHelper';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = { createStudent };
