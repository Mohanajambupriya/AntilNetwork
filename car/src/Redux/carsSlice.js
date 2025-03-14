// redux/carsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: [
    { id: 1, name: "Toyota Camry", price: 25000, fuel: "Petrol", image: "https://media.rti.toyota.com/config/pub/3d/vcr/live/vehicle/TOY/2025/camry/2561/764/c37ceefc42a138705c8b9bfdc3b2f2c0cfd8a032b35ac1724984c5cb4cd41ec4.png?fit=crop&wid=1200&hei=663&efcview=Exterior&bfc=off&fmt=png-alpha" }
  ], // Initial car data

  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCar } = carsSlice.actions;
export default carsSlice.reducer;
