import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDb = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicFacultyService = { insertIntoDb };
