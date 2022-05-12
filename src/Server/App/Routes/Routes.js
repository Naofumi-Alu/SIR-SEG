import express from 'express';
const Router = express.Router();
import ControllRoutes from '../Controller/ControllRoutes';

Router.get('/about', ControllRoutes.getIndex);
Router.get('/Investigacion-Desarrollo/Content', ControllRoutes.getHomeContent);
// API QUE TRAE TODOS LOS DATOS DE LA DB
Router.get('/Api', ControllRoutes.getApi);

export default Router;