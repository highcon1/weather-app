import React from 'react'
import BottomNav from './ui/BottomNav'
import CurrentForecast from './ui/CurrentForecast'

const HomePage = () => {
  return (
    <div className='relative bg-black w-screen h-screen items-center justify-around lg:hidden'>
        <div className='overflow-y-auto h-full'>
        <CurrentForecast />
        </div>
        
    </div>
  )
}

export default HomePage