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
  console.log(req.query);
  const response: IGenericResponse = await HttpService.get('/academic-semester', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDb,
  getAllFromDb
};
