import { DECREMENT, INCREMENT, TOGGLE_THEME } from "./actions";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const toggleTheme = className => ({ type: TOGGLE_THEME, payload: className });
