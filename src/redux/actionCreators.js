import { DECREMENT, INCREMENT, TOGGLE_THEME } from "./actions";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => (dispatch, getState) => setTimeout(() => dispatch(increment()), 1000);
export const toggleTheme = className => ({ type: TOGGLE_THEME, payload: className });
