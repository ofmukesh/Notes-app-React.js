import { Notes_types } from "../actions";
const color_options = {
  1: " #7A00D4",
  2: "#00557A",
  3: "#7A5B00",
  4: "#7A7A7A",
  5: "#7A0026",
  6: "#2B007A",
  7: "#7A0015",
  8: "white",
};

const initialState = {
  notes: [
    {
      id: 1,
      title: "Note-1",
      content: "Hi i am mukesh",
      date: new Date().toLocaleDateString(),
      backgroundColor: color_options[1],
    },
    {
      id: 2,
      title: "Note-2",
      content: "Hi i am mukesh",
      date: new Date().toLocaleDateString(),
      backgroundColor: color_options[2],
    },
    {
      id: 3,
      title: "Note-3",
      content: "Hi i am mukesh",
      date: new Date().toLocaleDateString(),
      backgroundColor: color_options[3],
    },
  ],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Notes_types.GET:
      return { ...state, notes: [] };
    default:
      return state;
  }
};
