import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.create),
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.insertIntoDB
);

export const academicDepartmentRoutes = router;
