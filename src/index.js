// import { createStore } from "./createStore";
import { asyncIncrement, decrement, increment, toggleTheme } from "./redux/actionCreators";
import { rootReducer } from "./redux/rootReducer";

import { applyMiddleware, createStore } from "redux";

import "./styles.css";
import thunk from "redux-thunk";

const $add = document.getElementById("add");
const $sub = document.getElementById("sub");
const $async = document.getElementById("async");
const $theme = document.getElementById("theme");
const $counter = document.getElementById("counter");

const store = createStore(rootReducer, applyMiddleware(thunk));

$add.addEventListener("click", () => {
  store.dispatch(increment());
});
$sub.addEventListener("click", () => {
  store.dispatch(decrement());
});
$async.addEventListener("click", () => {
  store.dispatch(asyncIncrement());
});
$theme.addEventListener("click", () => {
  const value = document.body.classList.contains("dark") ? "light" : "dark";
  store.dispatch(toggleTheme(value));
});

store.subscribe(() => {
  const state = store.getState();
  $counter.textContent = state.counter;

  document.querySelectorAll(".btn").forEach(node => (node.disabled = state.theme.disabled));

  document.body.className = state.theme.value;
});

store.dispatch({ type: "__INIT__" });
