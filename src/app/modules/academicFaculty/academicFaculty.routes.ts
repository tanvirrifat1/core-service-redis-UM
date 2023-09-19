import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicFacultyValidation.create),
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyController.insertIntoDb
);

export const AcademicFacultyRoutes = router;
