function NoteItem({ title, desc, id, onDelete }) {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        DELETE
      </button>
    </div>
  );
}

export default NoteItem;
