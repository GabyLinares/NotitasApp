import { useState } from "react"

export const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className="Note new">
            <textarea
                rows={8}
                cols={10}
                placeholder="Anota algo aquí :)"
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>200 restantes</small>
                <button className="guardar" onClick={handleSaveClick}>
                    Guardar
                </button>
            </div>
        </div>
    )
}