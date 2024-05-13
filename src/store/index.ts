import {
  createSlice,
  configureStore,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Vehicle {
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

const vehicleApi = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getVehicles: builder.query<Vehicle[], void>({
      query: () => "/vehicles",
    }),
  }),
});

export const useVehicleQuery = vehicleApi.endpoints.getVehicles.useQuery;

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    vehicleApi: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vehicleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export const selectSearch = (state: RootState) => state.search.search;
