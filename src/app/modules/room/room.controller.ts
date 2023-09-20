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

export const RoomController = { insertIntoDb };
