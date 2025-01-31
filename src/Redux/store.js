import { configureStore } from '@reduxjs/toolkit';
import WeatherSlice from './weatherSlice';

const store = configureStore({
  reducer: {
    weather: WeatherSlice,
  },
});

export default store;
