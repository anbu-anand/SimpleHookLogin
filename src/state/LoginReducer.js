import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state = {
        ...state.user,
        isLoggedIn: false
      };
    }
  }
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
