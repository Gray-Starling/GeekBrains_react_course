import { DECREASE_COUNT, INCREASE_COUNT } from "../../actions/actionTypes";

const initialState = {
  count: 0,
};

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
