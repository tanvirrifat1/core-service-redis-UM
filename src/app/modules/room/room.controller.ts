import { NextFunction, Response, Request } from 'express';
import { RoomService } from './room.service';
import sendResponse from '../../../shared/response';

const insertIntoDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.insertIntoDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getAllFromDb(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.getSingleRooms(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.updateRooms(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteRooms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RoomService.deleteRooms(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const RoomController = {
  insertIntoDb,
  deleteRooms,
  getAllFromDb,
  getSingleRooms,
  updateRooms
};
