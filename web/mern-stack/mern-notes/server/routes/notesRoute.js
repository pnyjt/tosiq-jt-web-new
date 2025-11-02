import express from "express"
import { createNote, deleteNote, detailNote, getAllNotes } from "../controllers/notesController.js";

const notesRoute = express.Router();

notesRoute.get('/notes', getAllNotes)
notesRoute.post('/notes/create', createNote)
notesRoute.delete('/notes/delete/:id', deleteNote)
notesRoute.get('/notes/:id', detailNote)


export default notesRoute