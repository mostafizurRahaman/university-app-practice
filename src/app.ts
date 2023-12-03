import express, { Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

// application :
const app = express();

// parser:
app.use(express.json());
app.use(cors());

// main route:
app.get('/', (req: Request, res: Response) => {
  res.status(httpStatus.OK).json('Yah!! PH Server is running now!!!');
});

// application route:
app.use('/api/v1', router);

// global error handler :
app.use(globalErrorHandler);

// Not Found  Router Handler:
app.use(notFound);

export default app;
