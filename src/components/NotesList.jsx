import React from 'react';
import { Nota } from './Nota.jsx';
import { AddNote } from './AddNote.jsx';

export const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="notesList">
            {notes.map((note) => (
                <Nota
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}