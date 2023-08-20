import { Notes_types } from "../actions";

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Notes_types.ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
