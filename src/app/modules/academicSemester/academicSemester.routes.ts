import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDb);
router.post('/', AcademicSemesterController.insertIntoDb);

export const AcademicSemesterRoutes = router;
