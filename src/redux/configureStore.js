import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { setTimerForMessageFromBot } from "./middleWare/messageFromBot";
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { countReducer } from "./reducers/countReducer/countReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";

export const store = createStore(
  combineReducers({
    count: countReducer,
    chatList: chatReducer,
    messageList: messageReducer,
  }),
  composeWithDevTools(applyMiddleware(logger, setTimerForMessageFromBot))
);
