export const createStore = (rootReducer, initialState) => {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const listeners = [];
  return {
    dispatch: action => {
      state = rootReducer(state, action);
      listeners.forEach(callback => callback());
    },
    subscribe: callback => {
      listeners.push(callback);
    },
    getState: () => state,
  };
};
