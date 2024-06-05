import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const initialState = {
  modal: [],
  error: null,
  status: "idle",
};

export const fetchModal = createAsyncThunk("modalInfo/fetchModal", async () => {
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
  "modal/addContentModal",
  async (modal, { rejectWithValue }) => {
    const { image, title } = modal;

    try {
      const storage = getStorage();
      const storageRef = ref(storage, `modal/${image.name}`);

      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(db, "modal"), {
        url,
        title,
      });

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
      .addCase(fetchModal.fulfilled, (state, action) => {
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

export const selectModal = (state) => state.modal.modal;

export default modalSlice.reducer;
