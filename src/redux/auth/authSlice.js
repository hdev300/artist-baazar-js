import { createSlice } from "@reduxjs/toolkit";
import { continueWithGoogleAction, loginByPhoneAction, otpVerifyAction } from "./middleware";

const initialState = {
    loading: true,
    currentUser: [],
};

const authSlice = createSlice({
    name: "Auth",
    initialState: initialState,
    reducers: {
        signOutAction: state => {
            removeUser();
            state.currentUser = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            loginByPhoneAction.fulfilled,
            (state, { payload }) => {
                setUser(payload?.data);
                return payload;
            }
        );
        
        builder.addCase(
            otpVerifyAction.fulfilled,
            (state, { payload }) => {
                if (payload.status === 200 || payload.status === 201) {
                    const user = payload?.data?.data;
                    setUser(user);
                }
                return {
                    ...state,
                    currentUser: payload?.data?.data,
                };
            }
        );
    },
});

export const { signOutAction } = authSlice.actions;

export const authSelector = (state) => state.Auth;

export default authSlice.reducer;

