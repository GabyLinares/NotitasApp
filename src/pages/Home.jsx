import React, { useState } from 'react'
import { NotesList } from '../components/NotesList';
import { nanoid } from 'nanoid';

export const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Hola mundo',
      date: '00/00/00',
    },
    {
      id: nanoid(),
      text: 'Hola mundo 2',
      date: '00/00/01',
    },
    {
      id: nanoid(),
      text: 'Hola mundo 3',
      date: '00/00/02',
    },
  ]);

  return (
    <div className='menu-notas'>
      <NotesList notes={notes}/>
    </div>
  )
}
