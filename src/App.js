import { useDispatch, useSelector } from "react-redux";

function App() {
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Redux Thunk Example</h1>
    </div>
  );
}

export default App;
