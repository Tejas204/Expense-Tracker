import React, { useState } from 'react'
import visacard from '../images/visacard.png'
import mastercard from '../images/mastercard.png'
import { transactionHistory } from '../data'

const TransactionPage = () => {


  //This react hook takes transactionHistory as value which gets updated when the onSubmit buton in
  //the expense section is clicked.
  let [transaction, addNewTransactionItem] = useState(transactionHistory);


  return (
    // This div contains the payment method and transaction history
    <div className='h-screen'>
      {/* This div contains the user salutation */}
      <div className='pl-[17%] pt-4'>
        <p className='text-2xl font-bold'>Hey there!</p>
        <p className='text-md'>Select an option to track</p>
      </div>

      {/* This div contains the payment methods */}
      <div className='flex flex-row justify-center'>
        <img src={mastercard} className='h-[40%] w-[40%]'></img>
      </div>

      {/* This div contains functionality to submit expense
        * The onSubmit button will add an object to the transactionHistory and 
        * push the updated transactionHistory object to the hook.
        */}
        <div className=''>
            <form className='flex flex-row space-x-3 justify-center'>
              <input id='getExpenseNote' type='text' placeholder='Add an expense' className='bg-[#D9D9D9] h-10 w-[30%] rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none placeholder:p-2 text-lg'></input>
              <input id='getExpenseAmount' type='text' placeholder='Enter amount' className='bg-[#D9D9D9] h-10 rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none placeholder:p-2 text-lg'></input>
              <button type='button' className='bg-[#0492F9] pl-4 pr-4 rounded-lg text-white text-lg' onClick={()=>{
                addNewTransactionItem(transactionHistory.push(
                  {
                    expense: document.getElementById('getExpenseNote').value,
                    date: new Date().toLocaleString().slice(0,10),
                    amount: "-$"+document.getElementById('getExpenseAmount').value,
                  }))
              }}>Submit</button>
            </form>
        </div>

        {/* This div contains the expense history */}
        <div className='flex flex-col overflow-y-scroll h-1/2 scroll-smooth'>
            {transactionHistory.map((transactionItem, index)=>{
              if(transactionItem.amount.substring(0,1) == '+'){
                  return <div className='flex justify-between w-[50%] ml-[25%] mt-10 bg-[#F5F5F5] p-4 rounded-xl' key={index}>
                  <div className='font-medium text-md'>{transactionItem.expense}</div>
                  <div className='font-medium text-md'>{transactionItem.date}</div>
                  <div className='font-medium text-md text-[#17B609]'>{transactionItem.amount}</div>
                  <button type='submit' className='pl-4 pr-4 rounded-lg text-white text-lg bg-red-500'>Delete</button>
                </div>
              }
              else{
                  return <div className='flex justify-between w-[50%] ml-[25%] mt-10 bg-[#F5F5F5] p-4 rounded-xl' key={index}>
                    <div className='font-medium text-md'>{transactionItem.expense}</div>
                    <div className='font-medium text-md'>{transactionItem.date}</div>
                    <div className='font-medium text-md text-[#FF3D00]'>{transactionItem.amount}</div>
                    <button type='submit' className='pl-4 pr-4 rounded-lg text-white text-lg bg-red-500'>Delete</button>
                  </div>
              }
              
            })}
        </div>
    </div>
    
  )
}

export default TransactionPage