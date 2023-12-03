import { Schema, model } from 'mongoose';
import {
  IStudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';
import { bloodGroup, genders } from './student.constrant';

// User Name Schema :
const UserNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  middleName: {
    type: String,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
});

// guardian Schema :
const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: true,
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: true,
  },
  motherName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: true,
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: true,
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  occupation: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  contactNo: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
});

// Student Schema :
const studentSchema = new Schema<TStudent, IStudentModel>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: UserNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: genders,
      message: "{VALUE} can't be gender",
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: bloodGroup,
      message: `{VALUE} can't be bloodGroup`,
    },
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: {
    type: String,
    trim: true,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// create instance method:
studentSchema.statics.isUserExists = async (id: string) => {
  const isExists = await Student.findOne({ id: id });
  return isExists;
};

const Student = model<TStudent, IStudentModel>('Student', studentSchema);

export default Student;
