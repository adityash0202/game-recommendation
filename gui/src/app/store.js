import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import algorithmReducer from "../features/Page/algorithmSlice";

export const store = configureStore({
  reducer: {
    algorithm: algorithmReducer,
  },
});
