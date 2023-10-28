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
      });
  },
});

const apiKey = "5d36da2933504ce6b6b2d37afa6fdfd7";

const getFormattedDate = () => {
  const currentDate = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  const formattedCurrentDate = currentDate.toISOString().split("T")[0];
  const formattedOneMonthAgo = oneMonthAgo.toISOString().split("T")[0];

  return {
    from: formattedOneMonthAgo,
    to: formattedCurrentDate,
  };
};

export const fetchProgrammingData = createAsyncThunk(
  "programming/fetchData",
  async () => {
    try {
      const dateRange = getFormattedDate();
      const response = await axios.get(
        `https://newsapi.org/v2/everything?language=en&q=technology&from=${dateRange.from}&to=${dateRange.to}&apiKey=${apiKey}`
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export default programmingSlice.reducer;
