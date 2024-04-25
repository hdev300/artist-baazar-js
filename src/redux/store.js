const { createStore } = require("@reduxjs/toolkit");

const rootReducers = ""/* your root reducers here */

export const store = createStore(rootReducers);

const appThunkDispatch = (dispatch) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, store.getState);
  }
  return dispatch(action);
};

const appStore = {
  ...store,
  dispatch: useAppDispatch(store.dispatch)
};

const useAppDispatch = (action) => (dispatch, getState) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return dispatch(action);
};
