import { configureStore } from "@reduxjs/toolkit";
import myPollsReducer from "./thunk/fetchMyPolls";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    myPolls: myPollsReducer,
  },
});
