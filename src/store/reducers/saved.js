import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    indonesiaSaved: [],
    programmingSaved: [],
    covidSaved: [],
  },
  reducers: {
    saveIndonesiaArticle: (state, action) => {
      state.indonesiaSaved.push({ ...action.payload, saved: true });
      localStorage.setItem(
        "indonesiaSaved",
        JSON.stringify(state.indonesiaSaved)
      );
    },
    unsaveIndonesiaArticle: (state, action) => {
      state.indonesiaSaved = state.indonesiaSaved.filter(
        (article) => article.index !== action.payload.index
      );
      localStorage.setItem(
        "indonesiaSaved",
        JSON.stringify(state.indonesiaSaved)
      );
    },
    saveProgrammingArticle: (state, action) => {
      state.programmingSaved.push({ ...action.payload, saved: true });
      localStorage.setItem(
        "programmingSaved",
        JSON.stringify(state.programmingSaved)
      );
    },

    unsaveProgrammingArticle: (state, action) => {
      state.programmingSaved = state.programmingSaved.filter(
        (article) => article.index !== action.payload.index
      );
      localStorage.setItem(
        "programmingSaved",
        JSON.stringify(state.programmingSaved)
      );
    },

    saveCovidArticle: (state, action) => {
      state.covidSaved.push({ ...action.payload, saved: true });
      localStorage.setItem("covidSaved", JSON.stringify(state.covidSaved));
    },
    unsaveCovidArticle: (state, action) => {
      state.covidSaved = state.covidSaved.filter(
        (article) => article.index !== action.payload.index
      );
      localStorage.setItem("covidSaved", JSON.stringify(state.covidSaved));
    },
  },
});

export const {
  saveIndonesiaArticle,
  unsaveIndonesiaArticle,
  saveCovidArticle,
  unsaveCovidArticle,
  saveProgrammingArticle,
  unsaveProgrammingArticle,
} = savedSlice.actions;
export default savedSlice.reducer;
