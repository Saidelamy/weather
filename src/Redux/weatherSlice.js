import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '8f5063941e6b48b088a221249252301';
const API_URL = 'https://api.weatherapi.com/v1';

const initialState = {
  forecast: {},
  status: 'idle',
  error: null,
};

export const fetchWeatherByCity = createAsyncThunk(
  'weather/fetchWeatherByCity',
  async (city) => {
    const { data } = await axios.get(
      `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`,
    );
    return data;
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByCity.pending, (state) => {
      state.forecast = 'loading...';
    });
    builder.addCase(fetchWeatherByCity.fulfilled, (state, action) => {
      state.forecast = action.payload;
    });
  },
});

export default weatherSlice.reducer;
