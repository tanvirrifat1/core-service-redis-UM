import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post('/rooms', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllFromDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/rooms', {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleRooms = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.get(`/rooms/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateRooms = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.patch(`/rooms/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteRooms = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.delete(`/rooms/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const RoomService = { insertIntoDb, deleteRooms, getAllFromDb, getSingleRooms, updateRooms };
