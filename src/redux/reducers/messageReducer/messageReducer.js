import { ADD_MESSAGE, ADD_MESSAGE_FROM_BOT } from "../../actions/actionTypes";

const initialState = {
  messageList: [],
};

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
