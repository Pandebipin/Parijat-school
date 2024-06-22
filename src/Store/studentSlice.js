// studentSlice.js
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const initialState = {
  students: [],
  status: "idle", // for loading state
  error: null,
};

export const fetchstudents = createAsyncThunk(
  "students/fetchstudents",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "studentinfo"));
      const students = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return students;
    } catch (error) {
      throw Error("Failed to fetch students");
    }
  }
);

export const Addstudentinfo = createAsyncThunk(
  "students/Addstudentinfo",
  async (studentdata, { rejectWithValue }) => {
    const { name, age, number, email, section, image, class1 } = studentdata;

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `students/${image.name}`);

      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(db, "studentinfo"), {
        url,
        name,
        age,
        number,
        email,
        section,
        class1,
      });

      return {
        id: docRef.id,
        name,
        url,
        age,
        number,
        email,
        section,
        class1,
      };
    } catch (error) {
      return rejectWithValue("Failed to add student info");
    }
  }
);

export const removestudentInfo = createAsyncThunk(
  "students/removestudentInfo",
  async (studentId) => {
    await deleteDoc(doc(db, "studentinfo", studentId));
    return studentId;
  }
);

export const updatestudent = createAsyncThunk(
  "students/updatestudent",
  async ({ id, updatedata }) => {
    const studentDocRef = doc(db, "studentinfo", id);
    await updateDoc(studentDocRef, updatedata);
    return { id, ...updatedata };
  }
);

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchstudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload;
      })
      .addCase(Addstudentinfo.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(Addstudentinfo.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(removestudentInfo.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (student) => student.id !== action.payload
        );
      })
      .addCase(removestudentInfo.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updatestudent.fulfilled, (state, action) => {
        const { id, ...updatedData } = action.payload;
        const existingstudentIndex = state.students.findIndex(
          (student) => student.id === id
        );
        if (existingstudentIndex >= 0) {
          state.students[existingstudentIndex] = { id, ...updatedData };
        }
      });
  },
});

export const selectAllstudents = (state) => state.students.students;
export default studentSlice.reducer;
