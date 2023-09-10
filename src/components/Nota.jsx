import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

export const Nota = ({ id, title, text, date, handleDeleteNote }) => {
    return (
        <div className="Note">
            <div className='titulo-nota'>
            <span>{title}</span>
            </div>
            <div className='texto-nota'>
                <span className='textoo'>{text}</span>
            </div>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever 
                onClick={() => handleDeleteNote(id)}
                className='delete' 
                size='1.3em' 
                />
            </div>
        </div>
    )
}