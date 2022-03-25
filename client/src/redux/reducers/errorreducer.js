import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  message: "",
  status: "",
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      console.log("Inside get errors");
      console.log(action.payload);
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        message: "",
        status: "",
        id: null,
      };
    default:
      return state;
  }
}
