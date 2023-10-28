import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./reducers/covid19";
import indonesiaReducer from "./reducers/indonesia";
import savedReducer from "./reducers/saved";
import programmingReducer from "./reducers/programming";

export const store = configureStore({
  reducer: {
    covid: covidReducer,
    indonesia: indonesiaReducer,
    saved: savedReducer,
    programming: programmingReducer
  },
});
