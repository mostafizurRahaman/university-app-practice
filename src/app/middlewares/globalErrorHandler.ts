/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode: number = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const message: string = err.message || 'Something went wrong';

  return res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
  });
};

export default globalErrorHandler;
