import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice"; // Import the cars reducer

export const store = configureStore({
  reducer: {
    cars: carsReducer, // Add cars slice
  },
});
