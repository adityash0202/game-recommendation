import { createStore } from "redux";
import { algorithmSlice } from "./features/Page/algorithmSlice";

const store = createStore(algorithmSlice.reducer);

export default store;
