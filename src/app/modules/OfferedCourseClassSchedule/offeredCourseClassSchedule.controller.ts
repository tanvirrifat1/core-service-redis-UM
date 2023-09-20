import { Request, Response, NextFunction } from 'express';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';
import sendResponse from '../../../shared/response';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
