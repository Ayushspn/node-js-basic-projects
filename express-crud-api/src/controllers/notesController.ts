import { Note } from "../models/note";

export default class NotesController {
    constructor() {
    }
    private notes: Note[] = [];
    private nextId: number = 1;

    getAllNotes(req: any, res: { json: (arg0: { id: number; title: string; content: string; }[]) => void; }) {
        res.json(this.notes);
    }

    getNoteById(req: any, res: any) {
        const note = this.notes.find(n => n.id === parseInt(req.params.id));
        if (note) {
            res.json(note);
        } else {
            res.status(404).send('Note not found');
        }
    }

    createNote(req: any, res: any) {
        const newNote = {
            id: this.nextId++,
            title: req.body.title,
            content: req.body.content
        };
        this.notes.push(newNote);
        res.status(201).json(newNote);
    }

    updateNote(req:any, res: any) {
        const note = this.notes.find(n => n.id === parseInt(req.params.id));
        if (note) {
            note.title = req.body.title;
            note.content = req.body.content;
            res.json(note);
        } else {
            res.status(404).send('Note not found');
        }
    }

    deleteNote(req: any, res: any) {
        const index = this.notes.findIndex(n => n.id === parseInt(req.params.id));
        if (index !== -1) {
            this.notes.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).send('Note not found');
        }
    }
}

// export default new NotesController();