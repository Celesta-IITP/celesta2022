import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
} from "../actions/types";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  token: "",
  user: {},
  openloginModal: false,
  openregisterModal: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      console.log(action.payload.user);
      const user=action.payload.user
      localStorage.setItem("user",JSON.stringify(user))
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
}
