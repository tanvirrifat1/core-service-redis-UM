import { Request } from 'express';
import { CoreService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllFromDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-semester', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleSemester = async (req: Request): Promise<IGenericResponse> => {
  const semesterId = req.params.id;
  const headers = {
    Authorization: req.headers.authorization
  };

  const response: IGenericResponse = await HttpService.get(`/academic-semester/${semesterId}`, {
    headers
  });
  return response;
};

const updateFromDb = async (req: Request): Promise<IGenericResponse> => {
  const semesterId = req.params.id;
  const headers = {
    Authorization: req.headers.authorization
  };

  const response: IGenericResponse = await HttpService.patch(
    `/academic-semester/${semesterId}`,
    req.body,
    { headers }
  );
  return response;
};

const deleteFromDb = async (req: Request): Promise<IGenericResponse> => {
  const semesterId = req.params.id;
  const headers = {
    Authorization: req.headers.authorization
  };

  const response: IGenericResponse = await HttpService.delete(`/academic-semester/${semesterId}`, {
    headers
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDb,
  getAllFromDb,
  updateFromDb,
  getSingleSemester,
  deleteFromDb
};
