import React from 'react';
import { Nota } from './Nota.jsx';
import { Home } from '../pages/Home.jsx';
import { AddNote } from './AddNote.jsx';

export const NotesList = ({ notes, handleAddNote }) => {
    return (
        <div className="notesList">
            {notes.map((note) => (
                <Nota key={note.id} text={note.text} date={note.date}/>
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}