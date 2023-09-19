import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles
} from './academicSemester.constant';

const createSchema = z.object({
  body: z.object({
    year: z.number({
      required_error: 'year is required'
    }),
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'title is required'
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'code is required'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'startMonth is required'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'endMonth is required'
    })
  })
});
const updateSchema = z.object({
  body: z.object({
    year: z.number({
      required_error: 'year is required'
    }),
    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: 'title is required'
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'code is required'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'startMonth is required'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'endMonth is required'
    })
  })
});

export const academicSemesterValidation = {
  createSchema,
  updateSchema
};
