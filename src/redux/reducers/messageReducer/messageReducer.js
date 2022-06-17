import { ADD_MESSAGE, ADD_MESSAGE_FROM_BOT } from "../../actions/actionTypes";

/**
 * Стейт, который в дальнейшем использует Редюсер
 */
const initialState = {
  messageList: [],
};

/**
 * Функционал работы со списком чатов
 * @returns ADD_MESSAGE - Добавляет введенное сообщение в список сообщений
 * @returns ADD_MESSAGE_FROM_BOT - Добавляет сообщение от бота в список сообщений, реагирует на отправленное сообщение от автора
 */
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    case ADD_MESSAGE_FROM_BOT:
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    default:
      return state;
  }
};
