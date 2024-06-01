import { configureStore } from "@reduxjs/toolkit";
import bucketReducer from "./bucketSlice";
import teacherInfoReducer from "./teacherInfoSlice";

const store = configureStore({
  reducer: {
    bucket: bucketReducer,
    teachers: teacherInfoReducer,
  },
});

export default store;
