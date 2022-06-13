import * as type from "../../actions/actionTypes";
const initialState = {
  currentUser: null,
  loadingUser: false,
  errorUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER_START:
      return {
        ...state,
        loadingUser: true,
      };

    case type.REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loadingUser: false,
      };

    case type.REGISTER_ERROR:
      return {
        ...state,
        errorUser: action.payload,
        loadingUser: false,
      };

    default:
      return state;
  }
};
