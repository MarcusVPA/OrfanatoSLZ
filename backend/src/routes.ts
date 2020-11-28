import { Router } from 'express';
import multer from 'multer';
import uploadController from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadController);

routes.get('/orphanages',OrphanagesController.index);
routes.get('/orphanages/:id',OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create)

export default routes;