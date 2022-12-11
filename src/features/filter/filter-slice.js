import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "@@filters",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => [],
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const selectFilters = (state) => state.filters;
