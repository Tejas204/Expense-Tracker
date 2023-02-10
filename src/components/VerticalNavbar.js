import React from 'react'

const verticalNavbar = () => {
  return (
    <div className='bg-[#293331] h-screen'>
      {/* This is the title bar of the page
      * It contains the brand name and the
      * Navigation links */}
      <div className='flex flex-row justify-center text-3xl text-white sm:pt-2 md:pt-10'>
        Expense <span className='text-[#0492F9]'>Tracker</span>
      </div>

      {/* Navigation links with icons */}
    </div>
  )
}

export default verticalNavbar