import { useDispatch, useSelector } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";

function App() {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  const onAddNote = (note) => {
    dispatch(addNote(note));
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
    </div>
  );
}

export default App;
