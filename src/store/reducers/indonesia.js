import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const indonesiaSlice = createSlice({
  name: "indonesia",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndonesiaData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchIndonesiaData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchIndonesiaData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

const apiKey = "5d36da2933504ce6b6b2d37afa6fdfd7";

export const fetchIndonesiaData = createAsyncThunk("indonesia/fetchData", async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export default indonesiaSlice.reducer;
