import React, { useState } from 'react'
import { NotesList } from '../components/NotesList';
import { nanoid } from 'nanoid';
import { Search } from '../components/Search';

export const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'Bienvenid@ a Notitas App',
      text: 'Este es un proyecto personal',
      date: '00.00.00',
    },
    {
      id: nanoid(),
      title: 'Simplemente escribe el título',
      text: 'Y tu texto en la siguiente nota y presiona Guardar',
      date: '00.00.00',
    },
  ]);

  const addNote = (title, text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);

  };

  const deleteNote = (id) => {
    console.log(`Deleting note with ID: ${id}`);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='menu-notas'>
      <div className='tituloNotitas'>
        <span className='notitas'>Notitas</span>
        <Search />
      </div>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote} />
      {/* <div className='footerNotitas'> */}
        
      {/* </div> */}
    </div>
  )
}
