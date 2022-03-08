import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./LoginReducer";

export default configureStore({
  reducer: userReducer
});
