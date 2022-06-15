import * as types from "./actionTypes";
import { auth } from "../../firebase";

// Экшены чата
export const add_Chat = (newChat) => ({
  type: types.ADD_CHAT,
  payload: newChat,
});

export const remove_Chat = (id) => ({
  type: types.DELETE_CHAT,
  payload: id,
});

// Экшены сообщений
export const add_Message = (message) => ({
  type: types.ADD_MESSAGE,
  payload: message,
});

export const add_Message_From_Bot = (messageFromBot) => ({
  type: types.ADD_MESSAGE_FROM_BOT,
  payload: messageFromBot,
  meta: {
    delay: 1500,
  },
});

// Экшены счетчика
export const decrease_Count = () => ({ type: types.DECREASE_COUNT });

export const increase_Count = () => ({ type: types.INCREASE_COUNT });

// Экшены постов
export const get_posts = (data) => ({ type: types.GET_POSTS, payload: data });

export const load_posts = () => ({ type: types.LOADING_POSTS });

export const error_posts = (err) => ({
  type: types.ERROR_POSTS,
  payload: err.toString(),
});

// Экшены регистрации пользователя
export const register_start = () => ({
  type: types.REGISTER_START,
});

export const register_success = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

export const register_error = (err) => ({
  type: types.REGISTER_ERROR,
  payload: err,
});

// Экшены входа пользователя
export const login_start = () => ({
  type: types.LOGIN_START,
});

export const login_success = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

export const login_error = (err) => ({
  type: types.LOGIN_ERROR,
  payload: err,
});

// Экшены вЫхода пользователя
export const logout_start = () => ({
  type: types.LOGOUT_START,
});

export const logout_success = () => ({
  type: types.LOGOUT_SUCCESS,
});

export const logout_error = () => ({
  type: types.LOGOUT_ERROR,
});

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

// Вход
export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(login_start());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login_success(user));
      })
      .catch((e) => dispatch(login_error(e.message)));
  };
};
// Выход
export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(logout_start());
    auth
      .signOut()
      .then((resp) => dispatch(logout_success()))
      .catch((e) => dispatch(logout_error(e.message)));
  };
};
