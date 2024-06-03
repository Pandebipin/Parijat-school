import { configureStore } from "@reduxjs/toolkit";
import bucketReducer from "./bucketSlice";
import teacherInfoReducer from "./teacherInfoSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    bucket: bucketReducer,
    teachers: teacherInfoReducer,
    modal: modalReducer,
  },
});

export default store;
