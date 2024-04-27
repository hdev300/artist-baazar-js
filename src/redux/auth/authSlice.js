import { createSlice } from "@reduxjs/toolkit";
import {
  loginArtistAction,
  signupArtistAction,
  forgotPasswordArtistAction,
  resetPasswordArtistAction,
} from "./middleware";

const initialState = {
  loading: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    logoutAction: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginArtistAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginArtistAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginArtistAction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(signupArtistAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupArtistAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupArtistAction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(forgotPasswordArtistAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPasswordArtistAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPasswordArtistAction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(resetPasswordArtistAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPasswordArtistAction.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPasswordArtistAction.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logoutAction } = authSlice.actions;

export const authSelector = (state) => state.Auth;

export default authSlice.reducer;
