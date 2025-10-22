import express from "express"
import { createNote, deleteNote, getAllNotes } from "../controllers/notesController.js";

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes)
notesRoute.post('/notes/create', createNote)
notesRoute.delete('/notes/delete/:id', deleteNote)

export default notesRoute