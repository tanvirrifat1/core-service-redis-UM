import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', AcademicSemesterController.getAllFromDb);
router.get('/:id', AcademicSemesterController.getSingleSemester);
router.patch('/:id', AcademicSemesterController.updateFromDb);
router.delete('/:id', AcademicSemesterController.deleteFromDb);
router.post('/', AcademicSemesterController.insertIntoDb);

export const AcademicSemesterRoutes = router;
