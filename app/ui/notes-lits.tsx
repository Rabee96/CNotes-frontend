"use client";

import { useEffect } from "react";
import Note from "../components/NoteCard";
import { useNoteStore } from "../store/useNotesStore";

export default function NotesList() {
  const { notes, fetchNotes, deleteNote } = useNoteStore();

  useEffect(() => {
    if (notes.length === 0) {
      fetchNotes();
    }
  }, [fetchNotes, notes]);

  return notes.length === 0 ? (
    <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
      <p className="text-lg text-muted">No notes yet</p>
      <p className="text-sm text-muted">
        Click the + button to create your first note
      </p>
    </div>
  ) : (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Note key={note._id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
}
