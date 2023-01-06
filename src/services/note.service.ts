import { Note } from '../models/note';
import { get, create, purge, update } from '../repositories/note.repository';

export async function getNotes() {
    return get();
}

export async function addNote(note: Note) {
    return create(note);
}

export async function deleteNote(id: number) {
    return purge(id);
}

export async function updateNote(note: Note) {
    return update(note);
}