import { Router } from 'express';
import NotesController from '../controllers/notesController';
const router = Router();
const notesController = new NotesController();

export function setNotesRoutes(app: Router) {
    app.get('/notes', notesController.getAllNotes.bind(notesController));
    app.get('/notes/:id', notesController.getNoteById.bind(notesController));
    app.post('/notes', notesController.createNote.bind(notesController));
    app.put('/notes/:id', notesController.updateNote.bind(notesController));
    app.delete('/notes/:id', notesController.deleteNote.bind(notesController));
}