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

const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getIdFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getIdFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatedFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updatedFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
  insertIntoDB,
  getAllFromDb,
  updatedFromDb,
  getIdFromDb,
  deleteFromDb
};
