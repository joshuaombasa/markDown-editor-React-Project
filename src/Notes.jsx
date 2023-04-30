
export default function Notes(props) {

    const notesJsx = props.notesData.map((note) => {
        return <p key={`${note}${note.length}`}>{note}</p>
    })



    return (
        <div className="notes--container">
            <nav className="notes--nav">
                <h2 className="notes--header">Notes</h2>
                <button className="add--note-btn" onClick={props.addNote}>+</button>
            </nav>

            {notesJsx}
        </div>
    )
}