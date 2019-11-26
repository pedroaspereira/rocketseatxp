import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
<<<<<<< HEAD
import CourseController from './app/controllers/CourseController';
import ExerciseController from './app/controllers/ExerciseController';
import SponsorController from './app/controllers/SponsorController';
=======
import OfferController from './app/controllers/OfferController';
>>>>>>> ad7027fe9854f4efc874f5cc2272827fcbbddc5a

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
<<<<<<< HEAD

routes.get('/courses', CourseController.index);
routes.post('/courses', CourseController.store);

routes.get('/exercises', ExerciseController.index);
routes.post('/exercises', ExerciseController.store);

routes.get('/sponsors', SponsorController.index);
routes.post('/sponsors', SponsorController.store);
=======
routes.put('/users', UserController.update);
>>>>>>> ad7027fe9854f4efc874f5cc2272827fcbbddc5a

routes.post('/offer', OfferController.store);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
