import {  Notes_types } from "../Index/action_types";

export const Notes = (request) => (dispatch) => {
        dispatch({
          type: Notes_types.SIGNUP_FAILED,
        })
};