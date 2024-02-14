import { ADD_NOTE, setNotes, SET_NOTES } from "./actions";

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }

    case SET_NOTES: {
      return { ...state, notes: action.payload };
    }

    default:
      return state;
  }
};

export const saveNotes = async (dispatch, getState) => {
  const notes = getState().notes;

  const url = "";

  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "aplication/json",
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(notes),
  });
  alert("success");
};

export const loadNotes = async (dispatch, getState) => {
  const url = "http://localhost:8080/index.php/wp-json/trabajadores/v1/todos";

  const notes = await fetch(url).then((res) => res.json());

  console.log(notes);

  dispatch(setNotes(notes));
};
