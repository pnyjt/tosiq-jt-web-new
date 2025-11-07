import express from 'express';
import { createNote, getNotes } from '../controllers/notesController.js';

const notesRoute = express.Router();

// fetch api
notesRoute.get('/', getNotes)
notesRoute.post('/create', createNote)

export default notesRoute;