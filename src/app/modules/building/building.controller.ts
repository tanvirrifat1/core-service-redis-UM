import { Request, Response, NextFunction } from 'express';
import { BuildingService } from './building.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.updateFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.deleteFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const BuildingController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateFromDB,
  deleteFromDB
};
