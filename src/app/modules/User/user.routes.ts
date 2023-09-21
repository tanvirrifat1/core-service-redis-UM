import express from 'express';
import { Response, Request, NextFunction } from 'express';
import { UserController } from './user.controller';
import { FileUploaderHelper } from '../../../helpers/FileUploadHelper';
import { UserValidation } from './user.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-student',
  FileUploaderHelper.upload.single('file'),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);

export const UserRoutes = router;
