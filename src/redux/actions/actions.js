import {
  ADD_CHAT,
  DELETE_CHAT,
  ADD_MESSAGE,
  ADD_MESSAGE_FROM_BOT,
  DECREASE_COUNT,
  INCREASE_COUNT,
  GET_POSTS,
  LOADING_POSTS,
  ERROR_POSTS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "./actionTypes";

// Экшены чата
export const add_Chat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const remove_Chat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

// Экшены сообщений
export const add_Message = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const add_Message_From_Bot = (messageFromBot) => ({
  type: ADD_MESSAGE_FROM_BOT,
  payload: messageFromBot,
  meta: {
    delay: 1500,
  },
});

// Экшены счетчика
export const decrease_Count = () => ({ type: DECREASE_COUNT });

export const increase_Count = () => ({ type: INCREASE_COUNT });

// Экшены постов
export const get_posts = (data) => ({ type: GET_POSTS, payload: data });

export const load_posts = () => ({ type: LOADING_POSTS });

export const error_posts = (err) => ({
  type: ERROR_POSTS,
  payload: err.toString(),
});

// Экшены регистрации пользователя
export const register_start = () => ({
  type: REGISTER_START,
});

export const register_success = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const register_error = (err) => ({
  type: REGISTER_ERROR,
  payload: err,
});

// Экшены входа пользователя
export const login_start = () => ({
  type: LOGIN_START,
});

export const login_success = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const login_error = (err) => ({
  type: LOGIN_ERROR,
  payload: err,
});

// Экшены вЫхода пользователя
export const logout_start = () => ({
  type: LOGOUT_START,
});

export const logout_success = () => ({
  type: LOGOUT_SUCCESS,
});

export const logout_error = () => ({
  type: LOGOUT_ERROR,
});
