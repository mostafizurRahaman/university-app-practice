import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TStudent } from './student.interface';
import Student from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
  // const student = new Student(payload);

  // use instance method:
  // if (await student.isUserExists(payload.id)) {
  //   throw new AppError(httpStatus.BAD_REQUEST, 'User Already Exists!!!');
  // }

  // use static methods :
  if (await Student.isUserExists(payload.id)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User Already Exists!!!');
  }

  const student = await Student.create(payload);

  return student;
};

const getAllStudentsFromDB = async () => {
  const students = await Student.find({});
  return students;
};

const getSingleStudentById = async (studentId: string) => {
  const student = await Student.isUserExists(studentId);
  return student;
};

const updateSingleStudentFromDB = async (
  studentId: string,
  payload: TStudent,
) => {
  if (!(await Student.isUserExists(studentId))) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User Already Exists!!!');
  }

  const result = await Student.findOneAndUpdate(
    { id: studentId },
    { $set: payload },
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

const deleteSingleUserFromDB = async (studentId: string) => {
  if (!(await Student.isUserExists(studentId))) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User Not Exists');
  }

  // delete User:
  const result = await Student.findOneAndUpdate(
    { id: studentId },
    {
      $set: {
        isDeleted: true,
      },
    },
    {
      new: true,
    },
  );

  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentById,
  updateSingleStudentFromDB,
  deleteSingleUserFromDB,
};
