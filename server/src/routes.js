import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import OfferController from './app/controllers/OfferController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/offer', OfferController.store);
routes.get('/offer', OfferController.index);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

export default routes;
