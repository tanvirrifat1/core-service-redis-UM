import { Response, Request, NextFunction } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = AcademicFacultyService.insertIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = { insertIntoDb };
