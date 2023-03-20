import React, { useEffect, useState } from 'react'
import userAvatar from '../images/user_avatar.png';


const UserProfileBudget = ({expenseReceived, deletedAmount}) => {

 //This hook will update the budget amount
 let [budgetAmount, setBudgetAmount] = useState(0);

 //This hook will set the deducted budget amount
 let [amountleft, setAmountLeft] = useState(0);
 

 //This hook will update the warnings if budget is exceeded
 let [numberOfWarnings, setNumberOfWarnings] = useState(0);

 // This useffect hook will update the amountLeft when budgetAmount updates
 useEffect(() => {
  setAmountLeft(budgetAmount);
 }, [budgetAmount]);

 // The following condition will check if an expense is received. If
 // received, use-effect hook will be triggered once to update the 
 // amount left
useEffect(() => {

  //Calculate the amount left
  amountleft-=expenseReceived
  
  if(amountleft<0){
    alert("You have exceeded your budget");
    setAmountLeft(0);
    setBudgetAmount(0);
    setNumberOfWarnings(numberOfWarnings+1);
    console.log(numberOfWarnings);
  }
  else{
    setAmountLeft(amountleft);
  }
}, [expenseReceived]);

// The following use effect hook will add the deleted amount to the budget
useEffect(() => {
  amountleft += deletedAmount;
  budgetAmount += deletedAmount;

  //call specific hooks
  setAmountLeft(amountleft);
  setBudgetAmount(budgetAmount);
}, [deletedAmount])

  


  return (
    <div className='bg-[#F5F5F5] h-screen'>
      {/* User avatar div */}
      <div className='flex flex-col'>
        <img src={userAvatar} className='h-[60%] w-[60%] mt-[20%] ml-[18%]'></img>
        <p className='text-xl font-bold ml-[40%]'>Adam</p>
      </div>

      {/* User budget and amount left */}
      {/* This div displays the budget */}
      <div className='flex flex-row justify-center space-x-6 mt-4'>
        <div className='flex flex-col gap-y-3'>
          <p className='font-semibold text-lg'>Your Budget</p>
          <p className='font-bold ml-5 text-xl'>${budgetAmount}</p>
        </div>
        {/* Whenever expense is added, this amount gets deducted */}
        <div className='flex flex-col gap-y-3'>
          <p className='font-semibold text-lg'>Amount left</p>
          <p className='font-bold text-[#17B609] ml-5 text-xl'>${amountleft}</p>
        </div>
      </div>

      {/* This div displays the number of warnings */}
      <div className='flex flex-col justify-center text-center space-y-3 mt-[5%]'>
        <p className='text-lg font-semibold'>Warnings</p>
        <p className='text-xl text-[#FF3D00] font-bold'>{numberOfWarnings}</p>
      </div>

      {/* Form for increasing the budget */}
      <form className='flex flex-col space-y-10 justify-items-center mt-5'>
          <input id='budgetAmountDiv' type='text' placeholder='Add an amount' className='bg-[#D9D9D9] h-10 w-[70%] rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none p-2 placeholder:p-2 text-lg ml-[15%]'></input>
          <input type='text' placeholder='Note' className='bg-[#D9D9D9] h-10 w-[70%] rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none p-2 placeholder:p-2 text-lg ml-[15%]'></input>
          <button type='button' className='bg-[#0492F9] p-2 w-[30%] rounded-lg text-white text-lg ml-[35%]' onClick={() => {
            setBudgetAmount(budgetAmount+parseInt(document.getElementById('budgetAmountDiv').value));
            document.getElementById('budgetAmountDiv').innerHTML = "";
          }}>Submit</button>
      </form>
    </div>

  )
}

export default UserProfileBudget