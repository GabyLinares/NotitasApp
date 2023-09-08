export const AddNote = () => {
    return (
        <div className="Note new">
            <textarea
                rows={8}
                cols={10}
                placeholder="Anota algo aquí :)">
            </textarea>
            <div className="note-footer">
                <small>200 restantes</small>
                <button className="guardar">
                    Guardar
                </button>
            </div>
        </div>
    )
}