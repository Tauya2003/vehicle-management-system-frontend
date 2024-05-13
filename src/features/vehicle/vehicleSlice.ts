import { createSlice } from "@reduxjs/toolkit";

interface Vehicle {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  vin: string;
  availability: boolean;
  driverNationalID: String;
  driverLicense: String;
  employeeNumber: String;
  serviceStatus: String; // "Needs Service", "In Service", "Serviced"
  nextServiceDate: Date;
  parked: boolean;
}

interface VehicleState {
  vehicles: Vehicle[];
}

const initialState: VehicleState = {
  vehicles: [],
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
  },
});

// export the action creator
export const { setVehicles } = vehicleSlice.actions;

// export the reducer
export default vehicleSlice.reducer;
