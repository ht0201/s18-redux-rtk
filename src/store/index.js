import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

// initialState
const initialState = {
  counter: 0,
  showCounter: true,
};

// RTK

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// reducer
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     }
//     case 'INCREMENT_FIVE': {
//       return {
//         ...state,
//         counter: state.counter + action.payload,
//       };
//     }
//     case 'DECREMENT': {
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     }
//     case 'TOGGLE_COUNTER': {
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       };
//     }
//     default:
//       return state;
//   }
// };

// store
// const store = createStore(counterReducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
