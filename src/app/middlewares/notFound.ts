/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../utils/sendResponse';
import httpStatus from 'http-status';

const notFound = async (req: Request, res: Response, next: NextFunction) => {
  return sendResponse(res, {
    statusCode: httpStatus.BAD_REQUEST,
    success: false,
    message: 'API Route Not Found ',
    data: undefined,
  });
};

export default notFound;
