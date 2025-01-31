import React from 'react';
import { WeatherDataCity } from './WeatherDataCity';
import { WeatherApi } from './WeatherApi';

export const Weather = () => {
  return (
    <>
      <main className="grid grid-rows-12 md:h-full md:grid-cols-12">
        <div className="order-2 row-span-6 p-12 md:order-1 md:col-span-8">
          <WeatherDataCity />
        </div>
        <div className="order-1 row-span-6 border-l-2 border-white md:order-2 md:col-span-4">
          <WeatherApi />
        </div>
      </main>
    </>
  );
};
