import { genders, bloodGroup } from './student.constrant';
import { z } from 'zod';

// userNameValidation Schema :

const userNameValidationSchema = z.object({
  firstName: z
    .string({
      invalid_type_error: 'firstName should be string',
    })
    .trim(),
  middleName: z
    .string({
      invalid_type_error: 'firstName should be string',
    })
    .trim()
    .optional(),
  lastName: z
    .string({
      invalid_type_error: 'firstName should be string',
    })
    .trim(),
});

// Guardian Validation Schema :

const guardianValidationSchema = z.object({
  fatherName: z.string().trim(),
  fatherOccupation: z.string().trim(),
  fatherContactNo: z.string().trim(),
  motherName: z.string().trim(),
  motherOccupation: z.string().trim(),
  motherContactNo: z.string().trim(),
});

// localGuardian Validation Schema :
const localGuardianValidationSchema = z.object({
  name: z.string().trim(),
  occupation: z.string().trim(),
  address: z.string().trim(),
  contactNo: z.string().trim(),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    name: userNameValidationSchema,
    gender: z.enum([...(genders as [string, ...string[]])]),
    bloodGroup: z.enum([...(bloodGroup as [string, ...string[]])]).optional(),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: z.string().trim(),
  }),
});

export const StudentValidationSchema = {
   createStudentValidationSchema
};
