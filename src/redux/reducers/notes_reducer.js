import { Notes_types } from "../actions";

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Notes_types.ADD_NOTE: // add note
      return { ...state, notes: [...state.notes, action.payload] };
    case Notes_types.DELETE_NOTE: // delete note
      state.notes.splice(action.payload, 1);
      return { ...state, notes: [...state.notes] };
    default:
      return state;
  }
};
