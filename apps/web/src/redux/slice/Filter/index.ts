import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PriceFilterState } from '@types';

const initialState: PriceFilterState = {
  minPrice: '',
  maxPrice: '',
  isFrozen: false,
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriceMax: (state, action: PayloadAction<string>) => {
      if (!state.isFrozen) {
        state.maxPrice = action.payload;
      }
    },
    setPriceMin: (state, action: PayloadAction<string>) => {
      if (!state.isFrozen) {
        state.minPrice = action.payload;
      }
    },
    resetPriceFilter(state) {
      state.minPrice = '';
      state.maxPrice = '';
      state.isFrozen = false;
    },
    updatePriceFilter(
      state,
      action: PayloadAction<{ minPrice: string; maxPrice: string }>,
    ) {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
      state.isFrozen = true;
    },
  },
});

export const {
  setPriceMax,
  setPriceMin,
  resetPriceFilter,
  updatePriceFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
