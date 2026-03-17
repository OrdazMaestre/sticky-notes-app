import { useState } from 'react';
import { useColor } from '../context/ColorContext';
import { useNotes } from '../hooks/useNotes';
import Note from './Note';

export default function NoteBoard() {
  const { defaultColor } = useColor();
  const { notes, addNote, deleteNote } = useNotes();

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text, defaultColor);
      setText('');
    }
  };

  return (
    <div className="note-board">
      <h2>Escribe aqui tus anotaciones</h2>

      <form onSubmit={handleSubmit} className="add-note-form">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe tu nota aquí..."
          rows={3}
          maxLength={280}
        />
        <button type="submit" disabled={!text.trim()}>
          Añadir nota
        </button>
      </form>

      {notes.length === 0 ? (
        <p className="empty-message">No hay notas aún... ¡crea una! 📌</p>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </div>
      )}

      <p className="counter">
        {notes.length} / 10 notas
      </p>
    </div>
  );
}