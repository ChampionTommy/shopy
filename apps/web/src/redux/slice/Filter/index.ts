import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  from: string | null;
  to: string | null;
  isEmpty: boolean;
}

const initialState: CounterState = {
  from: null,
  to: null,
  isEmpty: true,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFrom: (state, action: PayloadAction<string>) => {
      state.from = action.payload;
      state.isEmpty = false;
    },
    setTo: (state, action: PayloadAction<string>) => {
      state.to = action.payload;
    },
    resetFilter: (state) => {
      state.from = null;
      state.to = null;
      state.isEmpty = true;
    },
  },
});

export const { setFrom, setTo, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
