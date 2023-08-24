import { Notes_types } from "../actions";

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes") || "[]"),
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Notes_types.ADD_NOTE: // add note
      localStorage.setItem(
        "notes",
        JSON.stringify([...state.notes, action.payload])
      );
      return { ...state, notes: [...state.notes, action.payload] };
      
    case Notes_types.UPDATE_NOTE: // update note
      state.notes[action.id] = action.updated_note; // update note
      localStorage.setItem("notes", JSON.stringify([...state.notes]));
      return { ...state, notes: [...state.notes] };

    case Notes_types.DELETE_NOTE: // delete note
      state.notes.splice(action.id, 1);
      localStorage.setItem("notes", JSON.stringify([...state.notes]));
      return { ...state, notes: [...state.notes] };
    default:
      return state;
  }
};
