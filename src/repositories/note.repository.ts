import { Note } from '../models/note';
import conn from '../database';

export async function create(note: Note) {

    return new Promise<Note>( (resolve, reject) => {
        conn.query(`INSERT INTO note (description, person) VALUES ('${note.description}', '${note.person}') RETURNING *`, 
        (err, data) => {
            if (err) return reject(err);
            resolve(data.rows[0]);
        })
    })
}

export async function get() {

    return new Promise<Note[]>( (resolve, reject) => {
        conn.query(`SELECT * FROM note`, (err, data) => {
            if (err) return reject(err);
            resolve(data.rows);
        })
    })
}

export async function update(note: Note) {

    return new Promise<Note>( (resolve, reject) => {
        conn.query(`UPDATE note SET description = '${note.description}',
                                    person = '${note.person}'
                                WHERE id = ${note.id}
                                RETURNING *`, (err, data) => {
            if (err) return reject(err);
            resolve(data.rows[0]);
        })
    })
}

export async function purge(id: number) {

    return new Promise<any>( (resolve, reject) => {
        conn.query(`DELETE note WHERE id = ${id}`, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}