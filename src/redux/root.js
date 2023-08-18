import { combineReducers } from "redux";
import { notesReducer } from "./reducers";

export default combineReducers({
  notes: notesReducer,
});
