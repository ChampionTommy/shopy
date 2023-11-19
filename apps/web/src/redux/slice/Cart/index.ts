/* eslint-disable no-plusplus */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartSliceState, Product } from '@types';
import { calcTotalPrice } from 'utils';

import { getCartFromLS } from 'utils/cartLocalstorage.util';

const cartData = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice: cartData.totalPrice,
  items: cartData.items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }: { payload: Product }) {
      const findItem = state.items.find((obj) => obj.id === payload.id);
      if (findItem) {
        if (findItem.count !== undefined) {
          findItem.count++; // Увеличиваем значение count на 1
        }
      } else {
        // eslint-disable-next-line no-param-reassign
        payload.count = 1; // Устанавливаем count в 1 для нового элемента товара
        state.items.push({
          ...payload,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});

export const { addItem, removeItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
