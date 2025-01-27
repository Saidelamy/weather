import React from 'react';
import { useSelector } from 'react-redux';

const HourOfDay = () => {
  const forecast = useSelector((state) => state.weather.forecast);

  const forecastHours = forecast?.forecast?.forecastday[0]?.hour?.slice(1, 11);

  return (
    <div>
      <p className="border-b-2 py-12 text-end text-6xl">
        {forecast?.current?.condition?.text}
      </p>
      <div className="grid grid-cols-5">
        {forecastHours?.map((hour, index) => {
          const time = new Date(hour.time).toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: null,
          });
          return (
            <div
              key={index}
              className="mt-5 flex w-[10rem] flex-col items-center justify-center text-black shadow-md shadow-gray-600 backdrop-blur-[5px]"
            >
              <div>
                <div>
                  <p className="w-full border-b-2 p-2 text-center text-2xl">
                    {time}
                  </p>
                </div>
                <div className="">
                  {/* <LuCloudSunRain className="mt-2 h-16 w-32 rounded-lg text-yellow-400 shadow-md shadow-slate-700" /> */}
                  <img src={hour?.condition?.icon} alt="weather icon" />
                </div>
                <div>
                  <p className="p-5 text-4xl">{Math.ceil(hour.temp_c)}℃</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourOfDay;
