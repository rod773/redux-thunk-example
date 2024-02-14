import { useDispatch, useSelector } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { addNote } from "./actions";
import { saveNotes, loadNotes } from "./notesReducer";

function App() {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
  };

  const onSave = () => {
    dispatch(saveNotes());
  };

  const onLoad = () => {
    dispatch(loadNotes());
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Redux Thunk Example</h1>
      <NewNoteInput addNote={addNote} />
      <br />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
      <br />
      <button onClick={onSave}>Save</button>
      <button onClick={onLoad}>Load</button>
    </div>
  );
}

export default App;
