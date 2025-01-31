import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherByCity } from '../Redux/weatherSlice';

export const InputSearch = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const forecast = useSelector((state) => state.weather.forecast);

  const handleSearch = () => {
    if (city.trim() !== '') {
      dispatch(fetchWeatherByCity(city));
    }
  };

  return (
    <>
      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-[400px]"
          placeholder={forecast?.location?.name}
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={handleSearch}
        />
      </div>
    </>
  );
};
