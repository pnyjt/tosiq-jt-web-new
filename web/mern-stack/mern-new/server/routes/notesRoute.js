import express from 'express';
import { createNote, deleteNote, detailNote, getNotes, updateNote } from '../controllers/notesController.js';

const notesRoute = express.Router();

// fetch api
notesRoute.get('/', getNotes)
notesRoute.post('/create', createNote)
notesRoute.delete('/delete/:id', deleteNote)
notesRoute.get('/detail/:id', detailNote)
notesRoute.patch('/update/:id', updateNote)

export default notesRoute;