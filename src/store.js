import { configureStore } from "@reduxjs/toolkit";
import paperReducer from "./slices/paperSlice";
import courseSlice from "./slices/courseSlice";

export const store = configureStore({reducer:{papers:paperReducer,courses:courseSlice}});
