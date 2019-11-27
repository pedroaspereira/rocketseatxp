import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SchoolController from './app/controllers/SchoolController';
import StudentRankingController from './app/controllers/StudentRankingController';
import CourseController from './app/controllers/CourseController';
import ExerciseController from './app/controllers/ExerciseController';
import SponsorController from './app/controllers/SponsorController';
import OfferController from './app/controllers/OfferController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/courses', CourseController.index);
routes.post('/courses', CourseController.store);

routes.get('/exercises', ExerciseController.index);
routes.post('/exercises', ExerciseController.store);

routes.get('/sponsors', SponsorController.index);
routes.post('/sponsors', SponsorController.store);

routes.post('/offer', OfferController.store);
routes.get('/offer', OfferController.index);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

routes.post('/schools', SchoolController.store);
routes.get('/schools', SchoolController.show);

routes.post('/studentRanking', StudentRankingController.store);
routes.get('/studentRanking', StudentRankingController.show);
export default routes;
