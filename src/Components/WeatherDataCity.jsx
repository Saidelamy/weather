import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherByCity } from '../Redux/WeatherSlice';
import HourOfDay from '../UI/HourOfDay';

export const WeatherDataCity = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherByCity('cairo'));
  }, []);

  const forecast = useSelector((state) => state.weather.forecast);

  return (
    <>
      <div className="grid h-full grid-rows-12">
        <div>
          <div>
            <h1 className="text-end text-3xl">
              {forecast?.location?.country} - {forecast?.location?.region}
            </h1>
            <h6 className="mt-4 text-end">
              <i>last updated:</i> {forecast?.current?.last_updated}
            </h6>
          </div>
          <HourOfDay />
        </div>
      </div>
    </>
  );
};
