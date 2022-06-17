import * as types from "../../actions/actionTypes";

const initialState = {
  currentUser: null,
  loadingUser: false,
  errorUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGOUT_START:
    case types.LOGIN_START:
      return {
        ...state,
        loadingUser: true,
      };

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loadingUser: false,
      };

    case types.REGISTER_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
      return {
        ...state,
        errorUser: action.payload,
        loadingUser: false,
      };

    default:
      return state;
  }
};
