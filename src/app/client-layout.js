"use client";
import { store } from "@/redux/store";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function ClientLayout({ children }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </Provider>
    </>
  );
}
