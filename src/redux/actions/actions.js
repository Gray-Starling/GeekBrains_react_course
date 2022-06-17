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
