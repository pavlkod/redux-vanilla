import { combineReducers } from "redux";
import { DECREMENT, INCREMENT, TOGGLE_THEME } from "./actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const initialState = {
  value: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
