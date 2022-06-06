import { combineReducers, createStore } from "redux";
import { chatReducer } from "./reducers/chatReducer";
import { countReducer } from "./reducers/countReducer";
import { messageReducer } from "./reducers/messageReducer";

export const store = createStore(
  combineReducers({
    count: countReducer,
    chatList: chatReducer,
    messageList: messageReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
