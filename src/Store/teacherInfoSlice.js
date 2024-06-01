import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../firebase";

const initialState = {
  teachers: [],
  status: "idle", // for loading state
  error: null,
};

export const fetchTeachers = createAsyncThunk(
  "teacherInfo/fetchTeachers",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "teacherinfo"));
      const teachers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return teachers;
    } catch (error) {
      throw Error("Failed to fetch teachers");
    }
  }
);

export const AddteacherInfo = createAsyncThunk(
  "teacher/AddteacherInfo",
  async (teacherdata, { rejectWithValue }) => {
    const { teachername, experience, image, qualification, age, category } =
      teacherdata;

    try {
      const storage = getStorage();
      const firestoreref = getFirestore();
      const storageRef = ref(storage, `profiles/${image.name}`);

      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(firestoreref, "teacherinfo"), {
        url,
        qualification,
        age,
        experience,
        teachername,
        category,
      }).then(() => console.log("upload"));

      return {
        id: docRef.id,
        teachername,
        experience,
        url,
        qualification,
        age,
        category,
      };
    } catch (error) {
      return rejectWithValue("Failed to add teacher info");
    }
  }
);

const teacherInfoSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.teachers = action.payload;
      })
      .addCase(AddteacherInfo.fulfilled, (state, action) => {
        state.teachers.push(action.payload);
      })
      .addCase(AddteacherInfo.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// teacherInfoSlice.js
export const selectAllTeachers = (state) => state.teachers.teachers;

export default teacherInfoSlice.reducer;
