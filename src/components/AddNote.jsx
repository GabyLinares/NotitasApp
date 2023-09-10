import { useState } from "react"

export const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleChangeTitle = (event) => {
        setNoteTitle(event.target.value);
    };


    const handleSaveClick = () => {
        if (noteTitle.trim().length > 0 && noteText.trim().length > 0) {
            handleAddNote(noteTitle, noteText);
            setNoteTitle('');
            setNoteText('');
        }
    }

    return (
        <div className="Note new">
            <input 
            type="text"
            placeholder="Título aquí"
            value={noteTitle}
            onChange={handleChangeTitle}>
            </input>
            <textarea
                rows={8}
                cols={10}
                placeholder="Anota algo aquí :)"
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>Notitas App</small>
                <button className="guardar" onClick={handleSaveClick}>
                    Guardar
                </button>
            </div>
        </div>
    )
}