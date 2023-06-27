import { createSlice } from "@reduxjs/toolkit";

const valueGlobalSlice = createSlice({
  name: "globalValue",
  initialState: {
    loading: false,
    animeSearch: [],
    currentPage: 1,
    totalPages: 0,
    genderSelected: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAnimeSearch: (state, action) => {
      state.animeSearch = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setGenderSelecte: (state, action) => {
      state.genderSelected = action.payload;
    },
  },
});

export const {
  setLoading,
  setAnimeSearch,
  setTotalPages,
  setCurrentPage,
  setGenderSelecte,
} = valueGlobalSlice.actions;
export default valueGlobalSlice.reducer;
