import express from 'express';
import { StudentRoutes } from '../modules/students/student.route';

const router = express.Router();

/**
 * @Route.use() middleware get two parameter @path & @routes
 * 
 * @code router.use('/students', StudentRoutes);
 * */


const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
