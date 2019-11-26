import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SchoolController from './app/controllers/SchoolController';
import StudentRankingController from './app/controllers/StudentRankingController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

routes.post('/schools', SchoolController.store);
routes.get('/schools', SchoolController.show);

routes.post('/studentRanking', StudentRankingController.store);
routes.get('/studentRanking', StudentRankingController.show);
export default routes;
