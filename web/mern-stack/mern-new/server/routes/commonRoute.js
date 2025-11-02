import express from 'express'
import { commonData } from '../controllers/commonController.js';

const commonRoute = express.Router();

commonRoute.get('/', commonData);

export default commonRoute;