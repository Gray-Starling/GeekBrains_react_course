import { nanoid } from "nanoid";
import { ADD_CHAT, DELETE_CHAT } from "../../actions/actionTypes";

const initialState = {
  chatList: [
    {
      id: nanoid(),
      name: "general",
    },
    {
      id: nanoid(),
      name: "music",
    },
    {
      id: nanoid(),
      name: "movie",
    },
    {
      id: nanoid(),
      name: "sport",
    },
    {
      id: nanoid(),
      name: "development",
    },
    {
      id: nanoid(),
      name: "cooking",
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CHAT:
      return {
        ...state,
        chatList: state.chatList.filter((chat) => chat.id !== action.payload),
      };
    case ADD_CHAT:
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };

    default:
      return state;
  }
};
