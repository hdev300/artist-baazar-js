import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginArtistAsync } from "./services.js";

export const loginArtistAction = createAsyncThunk(
  "/loginArtistAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await loginArtistAsync(request);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signupArtistAction = createAsyncThunk(
  "/signupArtistAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await signupArtistAsync(request);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const forgotPasswordArtistAction = createAsyncThunk(
  "/forgotPasswordArtistAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await signupArtistAsync(request);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const resetPasswordArtistAction = createAsyncThunk(
  "/resetPasswordArtistAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await signupArtistAsync(request);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
