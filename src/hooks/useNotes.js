import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = 'sticky-notes-app-notes';

export function useNotes() {
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (err) {
      console.error('Error leyendo notas de localStorage', err);
      return [];
    }
  });

  // Guardar en localStorage cada vez que cambian las notas
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    } catch (err) {
      console.error('Error guardando notas', err);
    }
  }, [notes]);

  const addNote = (text, color) => {
    if (!text.trim()) return; // ← validación básica (bonus)

    const newNote = {
      id: uuidv4(),
      text: text.trim(),
      color,
    };

    setNotes((prev) => {
      // Bonus: límite de 10 notas
      if (prev.length >= 10) {
        alert('¡Límite alcanzado! Máximo 10 notas permitidas.');
        return prev;
      }
      return [...prev, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return {
    notes,
    addNote,
    deleteNote,
  };
}