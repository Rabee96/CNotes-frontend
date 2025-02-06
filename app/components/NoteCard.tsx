import { INote } from "@/app/lib/types";

type Props = {
  note: INote;
  deleteNote: (id: string) => void;
};

const Note = ({ note, deleteNote }: Props) => {
  const noteBackgroundColors = ["#F3A712", "#06d6a0", "#7D7ABC", "#0B6E4F"];

  const getStableIndex = (id: string) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = (hash + id.charCodeAt(i)) % noteBackgroundColors.length;
    }
    return hash;
  };

  const backgroundColor = noteBackgroundColors[getStableIndex(note._id!)];

  return (
    <div
      key={note._id}
      className="rounded-lg border border-border p-4"
      style={{ backgroundColor }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-[#01161e]">{note.title}</h3>
      </div>
      <p className="mt-2 text-sm text-[#01161e]">{note.note}</p>
      <div className="mt-4 flex justify-end text-sm text-muted">
        <button
          onClick={() => deleteNote(note._id!)}
          className="text-delete hover:opacity-80 font-[700]"
          aria-label="Delete note"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
