import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos123: todoReducer, // this is used in Todo.js
  },
});

export default store;
