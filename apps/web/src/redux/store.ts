import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { marketplaceService } from 'services';
import Filter from './slice/Filter';
import Products from './slice/Products';

export const store = configureStore({
  reducer: {
    filter: Filter,
    products: Products,
    [marketplaceService.reducerPath]: marketplaceService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(marketplaceService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
