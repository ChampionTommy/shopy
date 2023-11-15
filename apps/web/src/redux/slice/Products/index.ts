import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@types';
import { marketplaceService } from 'services/marketplace.service';

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface ProductSliceState {
  items: Product[];
  status: Status;
}

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      marketplaceService.endpoints.listProducts.matchFulfilled,
      (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      },
    );
    builder.addMatcher(
      marketplaceService.endpoints.listProducts.matchPending,
      (state) => {
        state.status = Status.LOADING;
        state.items = [];
      },
    );
    builder.addMatcher(
      marketplaceService.endpoints.listProducts.matchRejected,
      (state) => {
        state.status = Status.ERROR;
        state.items = [];
      },
    );
  },
});

export const { setItems } = productSlice.actions;
export default productSlice.reducer;
