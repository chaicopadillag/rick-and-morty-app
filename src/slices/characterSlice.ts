import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CharacterStateType, Result } from "../types";

const initialState: CharacterStateType = {
  characters: [],
  favorites: [],
  isLoading: true,
  page: 1,
  perPage: 10,
  total: 0,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    startLoadingCharacters: (state) => {
      state.isLoading = true;
    },
    setCharacters: (state, action: PayloadAction<Result[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { startLoadingCharacters, setCharacters } = characterSlice.actions;
