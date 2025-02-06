interface FABProps {
  setShowForm: (showForm: boolean) => void;
}

export const FloatingButton = ({ setShowForm }: FABProps) => (
  <button
    onClick={() => setShowForm(true)}
    className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background shadow-lg transition-transform hover:scale-110"
    aria-label="Create new note"
  >
    +
  </button>
);

export default FloatingButton;
