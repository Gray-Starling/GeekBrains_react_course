import { DECREASE_COUNT, INCREASE_COUNT } from "../../actions/actionTypes";

/**
 * Стейт, который в дальнейшем использует Редюсер
 */
const initialState = {
  count: 0,
};

/**
 * Функционал работы со счетчиком
 * @returns INCREASE_COUNT - увеличивает значение счетчика на 1
 * @returns DECREASE_COUNT - уменьшает значение счетчика на 1
 */
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
