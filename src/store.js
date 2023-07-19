import { configureStore } from "@reduxjs/toolkit";
import paperReducer from "./slices/paperSlice";
import courseSlice from "./slices/courseSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({reducer:{papers:paperReducer,courses:courseSlice,user:userSlice}});
