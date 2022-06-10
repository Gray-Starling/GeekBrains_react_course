import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { setTimerForMessageFromBot } from "./middleWare/messageFromBot";
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { countReducer } from "./reducers/countReducer/countReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";

let loggerLib;
if (process.env.NODE_ENV === `development`) {
  loggerLib = logger;
}

// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducer = combineReducers({
  count: countReducer,
  chatList: chatReducer,
  messageList: messageReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  // persistedReducer,
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerLib, setTimerForMessageFromBot))
);

// export const persistor = persistStore(store);
