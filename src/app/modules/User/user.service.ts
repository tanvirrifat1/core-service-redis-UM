import { Request } from 'express';
import { FileUploaderHelper } from '../../../helpers/FileUploadHelper';
import { IUploadFile } from '../../../interfaces/File';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadImage = await FileUploaderHelper.uploadToCloudinary(file);

  if (uploadImage) {
    req.body.profileImage = uploadImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const academicSemesterResponse = await AuthService.get(
    `/academic-semester?syncId=${academicSemester}`
  );

  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadImage = await FileUploaderHelper.uploadToCloudinary(file);

  if (uploadImage) {
    req.body.faculty.profileImage = uploadImage.secure_url;
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse: IGenericResponse = await AuthService.get(
    `/academic-departments?syncId=${academicDepartment}`
  );

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  const academicFacultyResponse: IGenericResponse = await AuthService.get(
    `/academic-faculties?syncId=${academicFaculty}`
  );

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const response: IGenericResponse = await AuthService.post(`/users/create-faculty`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadImage = await FileUploaderHelper.uploadToCloudinary(file);

  if (uploadImage) {
    req.body.admin.profileImage = await uploadImage.secure_url;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const UserService = { createStudent, createAdmin, createFaculty };
