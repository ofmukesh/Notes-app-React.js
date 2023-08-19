import { Notes_types } from "../Index/action_types";

export const GetNotes = () => (dispatch) => {
  dispatch({
    type: Notes_types.GET,
  });
};
