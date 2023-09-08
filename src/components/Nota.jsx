import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

export const Nota = ({ id, text, date }) => {
    return(
        <div className="Note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className='delete' size='1.3em' />
        </div>
        </div>
    )
}