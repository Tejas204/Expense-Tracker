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
    </div>
  )
}

export default UserProfileBudget