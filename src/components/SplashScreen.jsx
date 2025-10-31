import React from 'react'
import { ArrowRight, Umbrella } from 'lucide-react'
import { Link } from 'react-router-dom'

const SplashScreen = () => {
  return (
    <div className='fixed top-0 z-50 w-screen h-screen bg-black text-white flex flex-col justify-around items-center gap-6 mb-[20em]'>
        <Umbrella color='blue' size={250} style={{ transform: "rotate(20deg)", strokeWidth: "0.5"}} />
        <div>
          <h1 className='font-bold text-[50px] leading-7 tracking-wider'>M.O.D.A</h1>
          <p className='text-[30px] tracking-widest'>Weather App</p>
        </div>
        <Link to='/home'><button type="button" className='w-15 h-15 rounded-full bg-blue-500 flex justify-center items-center transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:scale-105 group'><ArrowRight size={30} className="text-white transition-transform duration-300 group-hover:translate-x-2" /></button></Link>
    </div>
  )
}

export default SplashScreen