import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  continueWithGoogleAsync,
  loginByPhoneAsync,
  otpVerifyAsync,
  resendOtpAsync,
  signUpAsync,
} from "./services.js";
import { ApiResponse } from "~/types/api.types.js";
import { hideLoading, showLoading } from "../common/commonSlice.js";

export const loginByPhoneAction = createAsyncThunk("/loginByPhoneAction", async (request, { dispatch, rejectWithValue }) => {
  try {
    dispatch(showLoading());
    const response = await loginByPhoneAsync(request);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  } finally {
    dispatch(hideLoading());
  }
});

export const continueWithGoogleAction = createAsyncThunk("/continueWithGoogleAction", async (request, { dispatch, rejectWithValue }) => {
  try {
    // dispatch(showLoading());
    const response = await continueWithGoogleAsync(request);
    // dispatch(hideLoading());
    return response;
  } catch (error) {
    return rejectWithValue(error);
  } finally {
    // dispatch(hideLoading());
  }
});

export const resendOtpAction = createAsyncThunk("resendOtpAction", async (request, { dispatch, rejectWithValue }) => {
  try {
    dispatch(showLoading());
    const response = await resendOtpAsync(request);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  } finally {
    dispatch(hideLoading());
  }
});

export const signUpAction = createAsyncThunk("/signUpAction", async (request, { dispatch, rejectWithValue }) => {
  try {
    dispatch(showLoading());
    const response = await signUpAsync(request);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  } finally {
    dispatch(hideLoading());
  }
});

export const otpVerifyAction = createAsyncThunk("/otpVerifyAction", async (request, { dispatch, rejectWithValue }) => {
  try {
    dispatch(showLoading());
    const response = await otpVerifyAsync(request);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  } finally {
    dispatch(hideLoading());
  }
});

