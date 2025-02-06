export interface INote {
  _id?: string;
  title?: string;
  note?: string;
  status: "in_progress" | "completed";
}

export interface INoteFormData {
  title?: string;
  note?: string;
  status: "in_progress" | "completed";
}

export type NoteFormData = Omit<INote, "id" | "createdAt">;
