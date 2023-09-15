import { CoreService as HttpService } from '../../../shared/axios';

const insertIntoDb = async (req) => {
  console.log(req);
  const response = await HttpService.post('/academic-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  insertIntoDb
};
