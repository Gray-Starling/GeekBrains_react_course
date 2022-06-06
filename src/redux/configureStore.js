import { combineReducers, createStore } from "redux";
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { countReducer } from "./reducers/countReducer/countReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";

export const store = createStore(
  combineReducers({
    count: countReducer,
    chatList: chatReducer,
    messageList: messageReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
