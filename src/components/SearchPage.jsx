import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchCard from './ui/SearchCard';

const SearchPage = () => {
    const [city, setCity] = useState('');
    const [existingData, setExistingData] = useState(JSON.parse(localStorage.getItem("Weather")) || []);
    const navigate = useNavigate();

    //to check if the data stored is stale
    const isStale = (timestamp) => {
      const now = Date.now();
      const diff = now - timestamp;
      return diff > 3 * 60 * 60 * 1000; // 3 hours in milliseconds
    }


    const handleSearch = async () => {
        const url = `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=4&hour=24&key=1fc548ba68a042d0aa792045253010`

        try {

          // get today's date
          const today = new Date().toISOString().split('T')[0];

          // check if the location already exists
          const existing = existingData.find((obj) => obj.location.toLowerCase() === city.toLowerCase() && obj.date === today && !isStale(obj.savedAt));
          if (existing) {
            navigate('/home', { state: { weatherData: existing }});
            return;
          }
          const response = await fetch(url);
          const data = await response.json();

          // Destructuring the data
          const {
            location: { name, localtime: date},
            current: {
              temp_c,
              condition: { text, icon: currentIcon },
            },
            forecast: { forecastday },
          } = data;

          // Extracting chance of rain for current day (forecasr[0])
          const rainChanceToday = forecastday[0]?.day?.daily_chance_of_rain ?? 0;

          // Extract next 3 days
          const nextThreeDays = forecastday.slice(1, 4).map(({date, day}) => ({
            date,
            icon: day.condition.icon,
            avgTemp: day.avgtemp_c,
          }));

          // required data to store and navigate
          const newData = {
            location: name,
            date: date.split(' ')[0],
            currentTemp: temp_c,
            currentCondition: text,
            currentIcon,
            rainChanceToday,
            forecast: nextThreeDays,
            savedAt: Date.now(),
          }

          const filtered = existingData.filter((obj) => obj.location.toLowerCase() !== city.toLowerCase());
          const weatherData = [...filtered, newData];
        
          localStorage.setItem("Weather", JSON.stringify(weatherData));
          setExistingData(weatherData);
          navigate('/home');
        } catch (error) {
            console.log(error);
            }
        }
  return (
    <div className='w-screen h-screen bg-black py-4'>
        <span className='w-full h-10 flex items-center justify-around mt-4'>
          <input className='w-[80%] h-10 border-[#202B3B] rounded-lg p-2 bg-[#202B3B] focus:bg-[#202B3B] focus:border-[#202B3B] focus:outline-0 text-white focusNot' type="text" name="search" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City name"/>
          <button onClick={handleSearch} className='w-16 h-10 bg-[#202B3B] rounded-md text-white'>Search</button>
        </span>

        { existingData.length > 0 && (
          existingData.map((data, index) => (
            <SearchCard key={index} icon={data.currentIcon} name={data.location} temp={data.currentTemp} text={data.currentCondition} />
          )
        ))}
    </div>
  )
}

export default SearchPage