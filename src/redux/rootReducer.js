import { combineReducers } from "redux";
import { ACTIVE_BTNS, DECREMENT, INACTIVE_BTNS, INCREMENT, TOGGLE_THEME } from "./actions";

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
  disabled: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, value: action.payload };
    case ACTIVE_BTNS:
      return { ...state, disabled: false };
    case INACTIVE_BTNS:
      return { ...state, disabled: true };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
