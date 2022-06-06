import { nanoid } from "nanoid";

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
    case "delChat":
      return {
        ...state,
        chatList: state.chatList.filter((chat) => chat.id !== action.payload),
      };
    case "addChat":
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };

    default:
      return state;
  }
};
