import { configureStore } from '@reduxjs/toolkit';
import Filter from './slice/Filter';

export const store = configureStore({
  reducer: {
    filter: Filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
