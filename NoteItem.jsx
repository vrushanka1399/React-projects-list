import NoteItem from "./Noteitem";

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          desc={note.desc}
          id={note.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;
