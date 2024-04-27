import { useDispatch } from "react-redux";
import rootReducers from "./reducers";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch()
