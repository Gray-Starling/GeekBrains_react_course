import {
  GET_POSTS,
  LOADING_POSTS,
  ERROR_POSTS,
} from "../../actions/actionTypes";
import { get_posts, error_posts, load_posts } from "../../actions/actions";

/**
 * Стейт, который в дальнейшем использует Редюсер
 */
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

/**
 * Функционал работы со списком чатов
 * @returns LOADING_POSTS - Выполняется до момента получения и прогрузки постов
 * @returns GET_POSTS - Получает список постов
 * @returns ERROR_POSTS - Выполняется в случае ошибки получения постов
 */
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_POSTS:
      return {
        ...state,
        loading: true,
      };

    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case ERROR_POSTS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

/**
 * Получение списка постов.
 * @load_posts - пока посты не загрузились
 * @get_posts - Получает посты
 * @error_posts - в случае ошибки
 */
export const loadPosts = () => {
  return async (dispatch) => {
    dispatch(load_posts());
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch(get_posts(data));
    } catch (err) {
      dispatch(error_posts(err));
    }
  };
};
