const initialState = {
  messageList: [],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addMsg":
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    case "addMsgFromBot":
      return {
        ...state,
        messageList: [...state.messageList, action.payload],
      };
    default:
      return state;
  }
};
