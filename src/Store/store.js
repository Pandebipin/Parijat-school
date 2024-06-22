import { configureStore } from "@reduxjs/toolkit";
import bucketReducer from "./bucketSlice";
import teacherInfoReducer from "./teacherInfoSlice";
import modalReducer from "./modalSlice";
import studentReducer from "./studentSlice";
import financeReducer from "./financeSlice";

const store = configureStore({
  reducer: {
    bucket: bucketReducer,
    teachers: teacherInfoReducer,
    students: studentReducer,
    modal: modalReducer,
    finance: financeReducer,
  },
});

export default store;
