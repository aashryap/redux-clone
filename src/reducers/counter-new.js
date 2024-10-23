import { createSlice } from "../dedux";

let counter = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
      increment: (state, action) => {
        state.count +=  1;
        return state;
      },
      decrement: (state) => {
        state.count -= 1;
        return state
      }
    }
});

export const { increment, decrement } = counter.actions;

export default counter.reducer