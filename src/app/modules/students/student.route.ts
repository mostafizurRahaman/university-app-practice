import express, { Router } from 'express';

const router: Router = express.Router();

// create student Route:
router.route('/create-student').post();

export const StudentRoutes = router;
