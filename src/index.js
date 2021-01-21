import { createStore } from "./createStore";
import { decrement, increment } from "./redux/actionCreators";
import { rootReducer } from "./redux/rootReducer";
import "./styles.css";

const $add = document.getElementById("add");
const $sub = document.getElementById("sub");
const $async = document.getElementById("async");
const $theme = document.getElementById("theme");
const $counter = document.getElementById("counter");

const store = createStore(rootReducer);

$add.addEventListener("click", () => {
  store.dispatch(increment());
});
$sub.addEventListener("click", () => {
  store.dispatch(decrement());
});
$async.addEventListener("click", () => {
  setTimeout(() => {
    store.dispatch(increment());
  }, 1000);
});

store.subscribe(() => {
  const state = store.getState();
  $counter.textContent = state;
});

store.dispatch({ type: "__INIT__" });
