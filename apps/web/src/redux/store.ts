import { configureStore } from '@reduxjs/toolkit';
import { marketplaceService } from 'services';
import Filter from './slice/Filter';

export const store = configureStore({
  reducer: {
    filter: Filter,
    [marketplaceService.reducerPath]: marketplaceService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marketplaceService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
