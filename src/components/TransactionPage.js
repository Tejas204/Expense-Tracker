import React from 'react'
import visacard from '../images/visacard.png'
import mastercard from '../images/mastercard.png'

const TransactionPage = () => {
  return (
    // This div contains the payment method and transaction history
    <div className=''>
      {/* This div contains the user salutation */}
      <div className='pl-[17%] pt-4'>
        <p className='text-2xl font-bold'>Hey there!</p>
        <p className='text-md'>Select an option to track</p>
      </div>

      {/* This div contains the payment methods */}
      <div className='flex flex-row justify-center'>
        <img src={mastercard} className='h-[40%] w-[40%]'></img>
      </div>

      {/* This div contains the transaction history */}
        <div className=''>
            <form className='flex flex-row space-x-3 justify-center'>
              <input type='text' placeholder='Add an expense' className='bg-[#D9D9D9] h-10 w-[30%] rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none placeholder:p-2 text-lg'></input>
              <input type='text' placeholder='Enter amount' className='bg-[#D9D9D9] h-10 rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none placeholder:p-2 text-lg'></input>
              <button type='submit' className='bg-[#0492F9] pl-4 pr-4 rounded-lg text-white text-lg'>Submit</button>
            </form>
        </div>

        {/* This div contains the expense history */}
        <div></div>
    </div>
    
  )
}

export default TransactionPage