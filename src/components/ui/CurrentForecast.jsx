import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

const CurrentForecast = () => {
  const location = useLocation();
  const [weatherData, setWeatherData] = useState(null);
  // console.log(weatherData);

  useEffect(() => {
    //load data from state & local storage
    const dataFromState = location.state?.weatherData;
    const dataFromStorage = JSON.parse(localStorage.getItem("Weather"));

    //setting the data to load
    if (dataFromState) {
      setWeatherData(dataFromState);
    } else if (Array.isArray(dataFromStorage) && dataFromStorage.length > 0) {
      setWeatherData(dataFromStorage[dataFromStorage.length - 1]);
    }
  }, [location.state]);

  if (!weatherData) {
    return (
      <div className='w-screen h-screen bg-black text-white text-[24px] flex flex-col items-center justify-center gap-6 fixed z-50'>
        <p className='text-center w-[300px] leading-tight'>No data found. Press the button to search</p>
        <Link to="/search"><button className='w-30 border rounded-[15px] bg-[#202B3B]'>Search</button></Link>
      </div>
    )
  }

  const [day1, day2, day3] = weatherData.forecast;

  return (
    <>
      <div className='w-full flex flex-col items-center justify-around  text-white mb-5 mt-5'>
          <span>
              <p className='font-bold text-[40px] text-center'>{weatherData.location}</p>
              <p>Chance of rain: {weatherData.rainChanceToday}%</p>
              <p className='text-center'>{weatherData.currentCondition}</p>
          </span>
          <img className='w-50' src={weatherData.currentIcon} alt="" />
          <span className='font-bold text-[30px]'>{weatherData.currentTemp}<sup>o</sup>C</span>
      </div>

      <div className='w-full flex items-center justify-center'>
      <div className='w-[350px] h-[170px] py-4 px-3 text-white bg-[#202B3B] rounded-[20px] flex gap-2 flex-col'>
        <span><p className='text-[#808080] font-bold'>THREE DAY'S FORECAST</p></span>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col items-center'>
                <span><p className='text-[#808080] font-bold'>{day1.date}</p></span>
                <span><img src={day1.icon} alt="" /></span>
                <span><p>{day1.avgTemp}<sup>o</sup>C</p></span>
            </div>
            <div className='flex flex-col items-center border-x border-[#808080] w-30'>
                <span><p className='text-[#808080] font-bold'>{day2.date}</p></span>
                <span><img src={day2.icon} alt="" /></span>
                <span><p>{day2.avgTemp}<sup>o</sup>C</p></span>
            </div>
            <div className='flex flex-col items-center'>
                <span><p className='text-[#808080] font-bold'>{day3.date}</p></span>
                <span><img src={day3.icon} alt="" /></span>
                <span><p>{day3.avgTemp}<sup>o</sup>C</p></span>
            </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default CurrentForecast