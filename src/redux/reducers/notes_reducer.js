import { Notes_types } from "../actions";

const initialState = {
  notes: {},
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Notes_types.GET:
      return { ...state, notes: {} };
    default:
      return state;
  }
};
