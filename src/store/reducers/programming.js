import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const programmingSlice = createSlice({
  name: "programming",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgrammingData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchProgrammingData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProgrammingData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
  },
});

const apiKey = "db8cd3cb20654bc89250dd3f1960cd28";

export const fetchProgrammingData = createAsyncThunk("programming/fetchData", async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});


export default programmingSlice.reducer;
