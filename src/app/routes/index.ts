import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { offeredCourseRoutes } from '../modules/OfferedCourse/offeredCourse.routes';
import { semesterRegistrationRoutes } from '../modules/SemesterRegistration/semesterRegistration.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/OfferedCourseClassSchedule/offeredCourseClassSchedule.routes';
import { offeredCourseSectionRoutes } from '../modules/OfferedCourseSection/offeredCourseSection.routes';
import { studentEnrolledCourseRoutes } from '../modules/StudentEnrollCourse/studentEnrollCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMarks/studentEnrolledCourseMarks.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/building',
    routes: BuildingRoutes
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  },
  {
    path: '/course',
    routes: courseRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/semester-registration',
    routes: semesterRegistrationRoutes
  },
  {
    path: '/offered-course-class-schedule',
    routes: offeredCourseClassScheduleRoutes
  },
  {
    path: '/offered-course-section',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: studentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
