import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CharacterStateType, CharacterType } from '../types';

const initialState: CharacterStateType = {
  characters: [],
  character: null,
  favorites: [],
  isLoading: true,
  page: 1,
  total: 0,
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    startLoadingCharacters: (state) => {
      state.isLoading = true;
    },
    setCharacters: (state, action: PayloadAction<CharacterType[]>) => {
      state.characters = action.payload;
      state.isLoading = false;
    },
    setCharacter: (state, action: PayloadAction<CharacterType>) => {
      state.character = action.payload;
    },
    clearCharacter: (state) => {
      state.character = null;
    },
    setFavorites: (state, action: PayloadAction<CharacterType[]>) => {
      state.favorites = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { clearCharacter, setCharacter, setCharacters, setFavorites, setPage, setTotal, startLoadingCharacters } = characterSlice.actions;
