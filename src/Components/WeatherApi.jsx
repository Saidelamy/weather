import React from 'react';
import { InputSearch } from '../UI/InputSearch';
import { GiWindSlap } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import WeathersDays from '../UI/WeathersDays';

export const WeatherApi = () => {
  const forecast = useSelector((state) => state.weather.forecast);

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <div className="border-b-2">
            <InputSearch />
            <p className="mt-10 text-center text-8xl">
              {Math.ceil(forecast?.current?.temp_c)}℃
            </p>
            <p className="mb-8 flex items-center justify-center gap-3 text-center">
              <GiWindSlap />
              {forecast?.current?.wind_dir} {forecast?.current?.wind_kph}km/h
            </p>
          </div>
        </div>
        <WeathersDays />
      </div>
    </>
  );
};
