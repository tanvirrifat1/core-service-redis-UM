import { Response, Request, NextFunction } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = { insertIntoDB };
