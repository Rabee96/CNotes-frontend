"use client";

import { INote, INoteFormData } from "@/app/lib/types";
import { useState } from "react";
import FloatingButton from "./FloatingActionButton";
import { useNoteStore } from "../store/useNotesStore";

const initialFormData: INoteFormData = {
  title: "",
  note: "",
  status: "in_progress",
};

const NoteDialog = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<INoteFormData>(initialFormData);
  const { addNote } = useNoteStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newNote: INote = {
      ...formData,
      title: formData.title,
      note: formData.note,
      status: "in_progress",
    };

    await addNote(newNote);

    setFormData(initialFormData);
    setShowForm(false);
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <FloatingButton setShowForm={setShowForm} />
      {showForm && (
        <dialog
          className="fixed inset-0 flex items-center justify-center bg-black/50 w-full h-full"
          aria-modal="true"
          aria-labelledby="dialog-title"
        >
          <div className="w-full max-w-md rounded-lg bg-background p-6 dark:bg-dark-background">
            <h2
              id="dialog-title"
              className="mb-4 text-lg font-bold text-primary dark:text-muted-dark"
            >
              Create Note
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-foreground dark:text-muted-dark"
                >
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-primary dark:bg-dark-background dark:border-dark-border dark:text-primary focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="body"
                  className="block text-sm font-medium text-foreground dark:text-muted-dark"
                >
                  Content
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-primary dark:bg-dark-background dark:border-dark-border dark:text-primary focus:border-primary focus:ring-1 focus:ring-primary"
                  rows={3}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-md bg-delete px-4 py-2 text-background hover:opacity-90 dark:bg-dark-primary dark:text-background"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-background hover:opacity-90 dark:bg-dark-primary dark:text-background"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default NoteDialog;
