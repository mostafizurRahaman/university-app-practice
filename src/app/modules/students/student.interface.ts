import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type TGender = 'male' | 'female' | 'others';

export type TBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export type TLocalGuardian = {
  name: string;
  contactNo: string;
  occupation: string;
  address: string;
};

export type TStudent = {
  id: string;
  name: TUserName;
  gender: TGender;
  dateOfBirth?: string;
  bloodGroup?: TBloodGroup;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  academicDepartment: string;
  profileImg: string;
  isDeleted: boolean;
};

// instance method type:
// export interface IInstanceMethods {
//   isUserExists(id: string): Promise<TStudent | null>;
// }

// create model Type:

// for Instance Method:
/* export type TStudentModel = Model<
  TStudent,
  Record<string, never>,
  IInstanceMethods
>;
 */

// for static method :

export interface IStudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}



