import { configureStore } from "@reduxjs/toolkit";
import GlobalReduxValue from "./GlobalReduxValue";

const store = configureStore({
  reducer: {
    globalValue: GlobalReduxValue,
  },
});

export default store;
