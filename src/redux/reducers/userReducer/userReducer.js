import { auth } from "../../../firebase";
import * as type from "../../actions/actionTypes";
import {
  register_start,
  register_success,
  register_error,
} from "../../actions/actions";
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

//регистрация
export const registerInitiate = (email, password, displayName) => {
  return (dispatch) => {
    dispatch(register_start());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(register_success(user));
      })

      .catch((err) => dispatch(register_error(err.message)));
  };
};
