import { configureStore } from '@reduxjs/toolkit';
import WeatherSlice from './WeatherSlice';

const store = configureStore({
  reducer: {
    weather: WeatherSlice,
  },
});

export default store;
