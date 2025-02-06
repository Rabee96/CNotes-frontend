import { create } from "zustand";
import { INote } from "@/app/lib/types";
import { useGetNotes, useCreateNote, useDeleteNote } from "../lib/api";

interface NoteState {
  notes: INote[];
  fetchNotes: () => Promise<void>;
  addNote: (newNote: INote) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

export const useNoteStore = create<NoteState>((set) => ({
  notes: [],

  // Fetch notes from API and update store
  fetchNotes: async () => {
    try {
      const notes = await useGetNotes(); // Use the custom hook
      set({ notes });
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  },

  // Add a new note after successful API request
  addNote: async (newNote) => {
    try {
      const response = await useCreateNote(newNote);
      if (!response) throw new Error("Failed to add note");
      set((state) => ({ notes: [response as INote, ...state.notes] }));
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  },

  // Delete a note after successful API request
  deleteNote: async (id) => {
    try {
      const response = await useDeleteNote(id);
      if (!response.deleted) throw new Error("Failed to delete note");
      set((state) => ({
        notes: state.notes.filter((note) => note._id !== id),
      }));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  },
}));
