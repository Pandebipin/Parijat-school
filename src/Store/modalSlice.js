import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../firebase";

const initialState = {
  modal: [],
  error: null,
  status: "idle",
};

export const fetchmodal = createAsyncThunk("modalInfo/fetchmodal", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "modal"));
    const modal = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return modal;
  } catch (error) {
    throw Error("Failed to fetch modal");
  }
});

export const Addcontentmodal = createAsyncThunk(
  "teacher/AddteacherInfo",
  async (modal, { rejectWithValue }) => {
    const { image, title } = modal;

    try {
      const storage = getStorage();
      const firestoreref = getFirestore();
      const storageRef = ref(storage, `modal/${image.name}`);

      await uploadBytes(storageRef, url);
      const url = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(firestoreref, "modal"), {
        url,
        title,
      }).then(() => console.log("upload"));

      return {
        id: docRef.id,
        title,
        url,
      };
    } catch (error) {
      return rejectWithValue("Failed to add modal");
    }
  }
);

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchmodal.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.modal = action.payload;
      })
      .addCase(Addcontentmodal.fulfilled, (state, action) => {
        state.modal.push(action.payload);
      })
      .addCase(Addcontentmodal.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// teacherInfoSlice.js
export const modal = (state) => state.modal.modal;

export default modalSlice.reducer;
