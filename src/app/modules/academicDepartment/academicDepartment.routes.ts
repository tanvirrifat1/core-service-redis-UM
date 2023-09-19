import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllFromDB);
router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.update),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.updateFromDB
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.deleteFromDb
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.getSingleDB
);
router.post(
  '/',
  validateRequest(AcademicDepartmentValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.insertIntoDB
);

export const AcademicDepartmentRoutes = router;
