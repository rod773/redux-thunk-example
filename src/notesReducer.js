import { ADD_NOTE } from "./actions";

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }

    default:
      return state;
  }
};

export const saveNotes = async (dispatch, getState) => {
  const notes = getState().notes;

  const url = "";

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "aplication/json",
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(notes),
  });
};

export const loadNotes = async (dispatch, getState) => {
  const notes = getState().notes;

  const url = "";

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "aplication/json",
      "Content-Type": "aplication/json",
    },
    body: JSON.stringify(notes),
  });
};
