import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { characterSlice } from '../slices';

export const store = configureStore({
  reducer: {
    characterState: characterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
