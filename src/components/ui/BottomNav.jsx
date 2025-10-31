import React from 'react'
import { List, Map, SlidersHorizontalIcon } from 'lucide-react'
import { Cloud } from '../ui/Icons'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className="sticky bottom-0 flex w-screen h-12 bg-[#202B3B] items-center justify-around z-40">
        <Link to="/home"><Cloud className="text-[#808080] size-10" /></Link>
        <Link to="/search"><List color='gray' size={35} /></Link>
        <Map color='gray' size={35} />
        <SlidersHorizontalIcon color='gray' size={35} />
    </div>
  )
}

export default BottomNav