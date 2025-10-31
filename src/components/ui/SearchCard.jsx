import React from 'react'

const SearchCard = ({icon, name, temp, text}) => {
  return (
    <div className="flex items-center justify-between px-4 w-full rounded-lg text-white h-20 bg-[#202B3B] mt-4">
        <span className='flex items-center justify-center gap-3'>
            <img src={icon} alt="" />
            <span>
                <p className='font-bold text-[18px]'>{name}</p>
                <p>{text}</p>
            </span>
        </span>
        <p className='font-bold text-[20px]'>{temp}<sup>o</sup>C</p>
    </div>
  )
}

export default SearchCard