import { useState } from "react";

export const NewNoteInput = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (e) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        onChange={updateNote}
        type="text"
        value={note}
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  );
};
