import { collection, getDocs, query, where } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../config/firebase";

export const fetchMyPolls = createAsyncThunk("polls/fetchMyPolls", async (userId, thunkAPI) => {
  try {
    const pollsRef = collection(db, "polls");
    const myPollsQuery = query(pollsRef, where("createdBy.id", "==", userId));
    const snapshot = await getDocs(myPollsQuery);
    const myPolls = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return myPolls;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const myPollsSlice = createSlice({
  name: "myPolls",
  initialState: {
    status: null,
    error: null,
    polls: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyPolls.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchMyPolls.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.polls = action.payload;
      })
      .addCase(fetchMyPolls.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const selectMyPolls = (state) => state.myPolls;
export default myPollsSlice.reducer;
