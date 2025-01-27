import React from 'react';
import { useSelector } from 'react-redux';

const WeathersDays = () => {
  const forecast = useSelector((state) => state.weather.forecast);

  return (
    <div className="">
      <p className="mt-5 text-center text-3xl">The Next Days Forecast</p>

      {forecast?.forecast?.forecastday?.map((day, index) => {
        const forecastDate = new Date(day.date).toLocaleDateString('en-GB', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
        });
        return (
          <div key={index} className="mt-5 flex items-center justify-around">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full shadow-md shadow-black backdrop-blur-[5px]">
                {/* <BsCloudMoonFill className="text-4xl" /> */}
                <img
                  src={day.day.condition.icon}
                  alt={day.day?.condition?.text}
                />
              </div>
              <div>
                <p>{forecastDate}</p>
                <p>{day.day?.condition?.text}</p>
              </div>
            </div>
            <div className="flex flex-col border-l-2 border-white px-4">
              <span>{Math.ceil(day.day?.mintemp_c)}℃</span>
              <span>{Math.ceil(day.day?.maxtemp_c)}℃</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeathersDays;
