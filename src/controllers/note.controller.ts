import { Request, Response } from 'express';
import { getNotes, addNote, deleteNote, updateNote } from '../services/note.service';

export async function getNotesController(req: Request, res: Response) {

    await getNotes()
    .then(data => {
        return res.status(200).json({
            data
        });
    })
    .catch(err => {
        return res.status(400).send(err.message);
    });
};

export async function addNoteController(req: Request, res: Response) {

    const body = req.body;

    await addNote(body)
    .then(data => {
        return res.status(200).json({
            data
        });
    })
    .catch(err => {
        return res.status(400).send(err.message);
    });
};
export async function deleteNoteController(req: Request, res: Response) {

    const id = parseInt(req.params.id);

    await deleteNote(id)
    .then(data => {
        return res.status(200).json({
            data
        });
    })
    .catch(err => {
        return res.status(400).send(err.message);
    });
};

export async function updateNoteController(req: Request, res: Response) {

    const body = req.body;

    await updateNote(body)
    .then(data => {
        return res.status(200).json({
            data
        });
    })
    .catch(err => {
        return res.status(400).send(err.message);
    });
};