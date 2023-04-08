// store/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: {},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
