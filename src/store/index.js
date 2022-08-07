import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore, combineReducers } from "redux";
import authReducer from "../store/reducers/auth";
import counterReducer from "../store/reducers/counter";

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

// const store = createStore(counterReducer);

const reducers = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

// store

const store = configureStore({
  reducer: reducers,
});

export default store;
