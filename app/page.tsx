import NoteDialog from "@/app/components/NoteDialog";
import NotesList from "./ui/notes-lits";

export default function Home() {
  return (
    <div className="space-y-8">
      <NotesList />
      <NoteDialog />
    </div>
  );
}
