import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PriceFilterState } from '@types';

const initialState: PriceFilterState = {
  minPrice: '',
  maxPrice: '',
  searchValue: '',
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
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
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
      const { minPrice, maxPrice } = action.payload;
      return {
        ...state,
        minPrice,
        maxPrice,
        isFrozen: true,
      };
    },
  },
});

export const {
  setPriceMax,
  setPriceMin,
  setSearchValue,
  resetPriceFilter,
  updatePriceFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
