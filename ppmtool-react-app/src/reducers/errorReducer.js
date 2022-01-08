import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      console.log("action.type", action.type);
      console.log("action.payload", action.payload);

      return action.payload;

    default:
      return state;
  }
}
