import rootReducers from "./reducers";

const { createStore, configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        })
});

const appThunkDispatch = (dispatch) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, store.getState);
  }
  return dispatch(action);
};



 export const useAppDispatch = (action) => (dispatch, getState) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return dispatch(action);
};


const appStore = {
    ...store,
    dispatch: useAppDispatch(store.dispatch)
  };