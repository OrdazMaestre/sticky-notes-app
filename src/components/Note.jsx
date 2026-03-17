export default function Note({ note, onDelete }) {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <p>{note.text}</p>
      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        ×
      </button>
    </div>
  );
}