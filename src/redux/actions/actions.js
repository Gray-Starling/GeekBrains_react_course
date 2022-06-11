import {
  ADD_CHAT,
  DELETE_CHAT,
  ADD_MESSAGE,
  ADD_MESSAGE_FROM_BOT,
  DECREASE_COUNT,
  INCREASE_COUNT,
} from "./actionTypes";

export const add_Chat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

export const remove_Chat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

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

export const decrease_Count = () => ({ type: DECREASE_COUNT });

export const increase_Count = () => ({ type: INCREASE_COUNT });
