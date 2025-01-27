import React from 'react';
import { WeatherDataCity } from './WeatherDataCity';
import { WeatherApi } from './WeatherApi';

export const Weather = () => {
  return (
    <>
      <main className="mx-auto grid h-full grid-cols-12">
        <div className="col-span-8 p-12">
          <WeatherDataCity />
        </div>
        <div className="col-span-4 border-l-2 border-white">
          <WeatherApi />
        </div>
      </main>
    </>
  );
};
