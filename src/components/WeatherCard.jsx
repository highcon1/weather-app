import React from 'react'
import { ArrowRight, Umbrella } from 'lucide-react'

const WeatherCard = () => {
  return (
    <div className='w-screen h-screen bg-black text-white flex flex-col justify-around items-center gap-6'>
        <Umbrella color='blue' size={250} style={{ transform: "rotate(20deg)" }} />
        <div>
          <h1 className='font-bold text-[50px] leading-6 tracking-wider'>Breeze</h1>
          <p className='text-[30px]'>Weather App</p>
        </div>
        <button type="button" className='w-20 h-20 rounded-full bg-blue-500 flex justify-center items-center'><ArrowRight size={50} /></button>
    </div>
  )
}

export default WeatherCard