import { ACTIVE_BTNS, DECREMENT, INACTIVE_BTNS, INCREMENT, TOGGLE_THEME } from "./actions";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => (dispatch, getState) => {
  dispatch(setInActiveBtns());
  setTimeout(() => {
    dispatch(setActiveBtns());
    dispatch(increment());
  }, 1000);
};
export const toggleTheme = className => ({ type: TOGGLE_THEME, payload: className });

export const setActiveBtns = () => ({ type: ACTIVE_BTNS });
export const setInActiveBtns = () => ({ type: INACTIVE_BTNS });
