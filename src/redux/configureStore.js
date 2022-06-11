import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { countReducer } from "./reducers/countReducer/countReducer";
import { messageReducer } from "./reducers/messageReducer/messageReducer";
import storage from "redux-persist/lib/storage";
import { setTimerForMessageFromBot } from "./middleWare/messageFromBot";
import thunk from "redux-thunk";
import { postReducer } from "./reducers/postsReducer/postReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// Использование библиотеки logger только во время режима разработки
//! Проверить правильность в самой библиотеке
let loggerLib;
if (process.env.NODE_ENV === `development`) {
  loggerLib = logger;
}

/**
 *  Настройка redux-persist
 * Используется blacklist, дабы исключить некоторые редюсеры
 */
const persistConfig = {
  key: "root",
  blacklist: ["posts", "loading", "error"],
  storage,
};

/**
 * Список используемых редюсеров. Используем combineReducers что бы обьеденить несколько в один
 */
const rootReducer = combineReducers({
  count: countReducer,
  chatList: chatReducer,
  messageList: messageReducer,
  posts: postReducer,
  loading: postReducer,
  error: postReducer,
});

/**
 * Объединяем persist config и редюсеры
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Создаем стор с помощью Redux
 */
export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk, loggerLib, setTimerForMessageFromBot)
  )
);

export const persistor = persistStore(store);
