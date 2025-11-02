import express from 'express';
import { getNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

notesRoute.get('/', getNotes)

export default notesRoute;