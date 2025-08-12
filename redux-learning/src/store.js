import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});

export default store;
