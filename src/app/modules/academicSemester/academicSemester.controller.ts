import { Request, Response, NextFunction } from 'express';

import sendResponse from '../../../shared/response';
import { AcademicSemesterService } from './academicSemester.service';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getSingleSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.deleteFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  insertIntoDb,
  getAllFromDb,
  getSingleSemester,
  updateFromDb,
  deleteFromDb
};
