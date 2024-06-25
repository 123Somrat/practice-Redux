import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  value: number;
};

const initialState: TinitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialState,
  reducers: {
    increement: (state) => {
      state.value += 1;
    },
  },
});

export const { increement } = counterSlice.actions;
export default counterSlice.reducer;
