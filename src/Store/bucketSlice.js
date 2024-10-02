import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../firebase";

const initialState = {
  bucket: [],
  status: "nothing here",
  error: null,
};

export const fetchBlogs = createAsyncThunk("blogData/fetchBlogs", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Blogdata"));
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return blogs;
  } catch (error) {
    throw new Error("Failed to fetch blogs");
  }
});

export const Addbucket = createAsyncThunk(
  "bucket/Addbucket",
  async (bucketData, { rejectWithValue }) => {
    const { imgFile, desc, title } = bucketData;

    try {
      const storage = getStorage();
      const firestoreref = getFirestore();
      const storageRef = ref(storage, `images/${imgFile.name}`);

      await uploadBytes(storageRef, imgFile);
      console.log("Uploaded a file");

      const url = await getDownloadURL(storageRef);
      const date = new Date().toISOString();
      const docRef = await addDoc(collection(firestoreref, "Blogdata"), {
        url,
        desc,
        title,
        date,
      });

      console.log("Added a document");

      return { id: docRef.id, title, url, desc, date };
    } catch (error) {
      return rejectWithValue("Failed to add blog");
    }
  }
);

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bucket = action.payload;
      })
      .addCase(Addbucket.fulfilled, (state, action) => {
        state.bucket.push(action.payload);
      })
      .addCase(Addbucket.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectBuckets = (state) => state.bucket.bucket;

export default bucketSlice.reducer;
