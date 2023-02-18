import React from 'react'
import userAvatar from '../images/user_avatar.png';


const UserProfileBudget = () => {
  return (
    <div className='bg-[#F5F5F5] h-screen'>
      {/* User avatar div */}
      <div className='flex flex-col'>
        <img src={userAvatar} className='h-[60%] w-[60%] mt-[20%] ml-[18%]'></img>
        <p className='text-xl font-bold ml-[40%]'>Adam</p>
      </div>

      {/* User budget and amount left */}
      <div className='flex flex-row justify-center space-x-6 mt-4'>
        <div className='flex flex-col gap-y-3'>
          <p className='font-semibold'>Your Budget</p>
          <p className='font-bold ml-5'>$500</p>
        </div>
        <div className='flex flex-col gap-y-3'>
          <p className='font-semibold'>Amount left</p>
          <p className='font-bold text-[#17B609] ml-5'>$475</p>
        </div>
      </div>

      {/* Form for increasing the budget */}
      <form className='flex flex-col space-y-10 justify-items-center mt-10'>
          <input type='text' placeholder='Add an amount' className='bg-[#D9D9D9] h-10 w-[70%] rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none placeholder:p-2 text-lg ml-[15%]'></input>
          <input type='text' placeholder='Note' className='bg-[#D9D9D9] h-10 w-[70%] rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none placeholder:p-2 text-lg ml-[15%]'></input>
          <button type='submit' className='bg-[#0492F9] p-2 w-[30%] rounded-lg text-white text-lg ml-[35%]'>Submit</button>
      </form>
    </div>

  )
}

export default UserProfileBudget