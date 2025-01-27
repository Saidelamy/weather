import React from 'react';
import { Weather } from './Components/Weather';
import { useSelector } from 'react-redux';
import cloud from '../src/Assets/cloud.jpg';
import rain from '../src/Assets/rain.jpg';
import snow from '../src/Assets/snow.jpg';
import sunny from '../src/Assets/sunny.jpg';

function App() {
  const forecast = useSelector((state) => state.weather.forecast);

  const weatherCondition = forecast?.current?.condition?.text?.toLowerCase();

  let background = sunny;

  if (weatherCondition) {
    if (
      weatherCondition.includes('sunny') ||
      weatherCondition.includes('clear')
    ) {
      background = sunny;
    } else if (weatherCondition.includes('rain')) {
      background = rain;
    } else if (
      weatherCondition.includes('cloud') ||
      weatherCondition.includes('overcast')
    ) {
      background = cloud;
    } else if (weatherCondition.includes('snow')) {
      background = snow;
    }
  }

  let style = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className="app font-sans" style={style}>
      <Weather />
    </div>
  );
}

export default App;
