import React from 'react'
import {navItems} from '../data';

const verticalNavbar = () => {
  return (
    <div className='bg-[#293331] h-screen'>
      {/* This is the title bar of the page
      * It contains the brand name and the
      * Navigation links */}
      <div className='flex flex-row justify-center text-md md:text-3xl text-white sm:pt-2 md:pt-10 md:pb-10'>
        Expense <span className='text-[#0492F9]'>Tracker</span>
      </div>

      {/* Navigation links with icons */}
      <div>
        {/* Icon list */}
        <ul className='flex flex-col items-center'>
            {navItems.map((navItem, index)=>{
              return <div className='hover:bg-[#0492F9] rounded-full transition duration-300 ease-in-out'>
                <li key={index} className='p-6 flex flex-row space-x-10'>
                  <a href='#'><img src={navItem.image} className='h-9 w-9'></img></a>
                </li>
              </div>
            })}
        </ul>
      </div>

      {/* Footer logo */}
      <div className='pt-20'>
        <p className='text-2xl text-white text-center'>Powered by: React<span className='text-[#0492F9]'>JS</span></p>
      </div>
    </div>
  )
}

export default verticalNavbar