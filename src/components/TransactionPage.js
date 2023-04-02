import React, { useState } from 'react'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
import card3 from '../images/card3.png'
import card4 from '../images/card4.png'
import mastercard from '../images/mastercard.png'
import gpay from '../images/gpay.png';
import paypal from '../images/paypal.png';
import { transactionHistory, transactionImages } from '../data';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TransactionPage = ({getExpenseReceived, getDeletedAmount}) => {

  // This react hook takes transactionHistory as value which gets updated when the onSubmit buton in
  // the expense section is clicked.
  let [transaction, addNewTransactionItem] = useState(transactionHistory);

  // This react hook deletes a transaction element from the transactionHistory
  let [deletedTransaction, deleteSpecificTransaction] = useState(transactionHistory);

  // This react hook maintains the number of records in the transaction
  let [transactionCount, updateCount] = useState(2);

  // This hook shows the current paayment method
  let [currentPayMenthod, setCurrentPayMethod] = useState(1);

  // This variable stores the id of the record to be deleted
  let retrievedRecordId;

  //This function will send the expense amount to the UserProfile Budget component via the App.js file
  const sendExpenseAmount = (expenseAmount) => {
    getExpenseReceived(expenseAmount);
  }

  //This function will send the deleted amount to the UserProfile Budget Component via the App.js file
  const sendDeletedAmount = (deletedAmt) => {
    getDeletedAmount(deletedAmt);
  }


  return (
    // This div contains the payment method and transaction history
    <div className='h-screen'>
      {/* This div contains the user salutation */}
      <div className='pl-[17%] pt-4'>
        <p className='text-2xl font-bold'>Hey there!</p>
        <p className='text-md'>Select an option to track</p>
      </div>

      {/* This div contains the payment methods */}
      {/* & Arrows to navigate the payment options */}
      <div className='flex flex-row justify-center mb-5 mt-2'>
        {/* Move to previous payment method if any */}
        <FiChevronLeft size={30} className='mt-[8%] mr-[3%] hover:cursor-pointer' onClick={() => {
            if(currentPayMenthod -1 >= 0){
              currentPayMenthod -= 1;
              setCurrentPayMethod(currentPayMenthod);
              console.log(currentPayMenthod);
            }
        }}/>

        {/* Reflects the current payment method */}
        <img id='paymentImage' src={transactionImages[currentPayMenthod].image} className='h-[30%] w-[30%] hover:scale-110 ease-in-out duration-200'></img>

        {/* Move to next payment method if any */}
        <FiChevronRight size={30} className='mt-[8%] ml-[3%] hover:cursor-pointer' onClick={() => {
          if(currentPayMenthod + 1 < transactionImages.length){
            currentPayMenthod += 1;
            setCurrentPayMethod(currentPayMenthod);
            console.log(currentPayMenthod);
          }
        }}/>
      </div>

      {/* This div contains functionality to submit expense
        * The onSubmit button will add an object to the transactionHistory and 
        * push the updated transactionHistory object to the hook.
        */}
        <div className='mb-5'>
            <form className='flex flex-row space-x-3 justify-center'>
              <input id='getExpenseNote' type='text' placeholder='Add an expense' className='bg-[#D9D9D9] h-10 w-[30%] rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none p-2 placeholder:p-2 text-lg'></input>
              <input id='getExpenseAmount' type='text' placeholder='Enter amount' className='bg-[#D9D9D9] h-10 rounded-lg focus:ring-2 focus:ring-[#0492F9] outline-none p-2 placeholder:p-2 text-lg'></input>
              <button type='button' className='bg-[#0492F9] pl-4 pr-4 rounded-lg text-white text-lg hover:ring-2 hover:ring-offset-2 hover:ring-[#0492F9] transition-all duration-200' 
              onClick={()=>{
                updateCount(transactionCount += 1);
                sendExpenseAmount(parseInt(document.getElementById('getExpenseAmount').value));
                addNewTransactionItem(transactionHistory.push(
                  {
                    expense: document.getElementById('getExpenseNote').value,
                    date: new Date().toLocaleString().slice(0,10),
                    amount: "-$"+document.getElementById('getExpenseAmount').value,
                    recordId: transactionCount + 1
                  }));
              }}>Submit</button>
            </form>
        </div>

        {/* This div contains the expense history.
        * It also has a delete button. It deletes a record
        * by splicing the array of transactionHistory with the help
        * of the index of the array element. */}
        <div className='flex flex-col overflow-y-scroll h-1/2 scroll-smooth'>
            {transactionHistory.map((transactionItem, index)=>{
              if(transactionItem.amount.substring(0,1) == '+'){
                  return <div className='flex justify-between w-[50%] ml-[25%] mt-10 bg-[#F5F5F5] p-4 rounded-xl' key={index}>
                  <div className='font-medium text-md'>{transactionItem.expense}</div>
                  <div className='font-medium text-md'>{transactionItem.date}</div>
                  <div className='font-medium text-md text-[#17B609]'>{transactionItem.amount}</div>
                  <button type='submit' className='pl-4 pr-4 rounded-lg text-white text-lg bg-red-500 hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all duration-200' onClick={() => {
                    // get the deleted record
                    retrievedRecordId = transactionHistory.indexOf(transactionItem);
                    
                    // send the amount of deleted record to app.js
                    sendDeletedAmount(parseInt(transactionItem.amount.slice(2)));
                    
                    // delete the record
                    deleteSpecificTransaction(transactionHistory.splice(retrievedRecordId,1));
                  }}>Delete</button>
                </div>
              }
              else{
                  return <div className='flex justify-between w-[50%] ml-[25%] mt-10 bg-[#F5F5F5] p-4 rounded-xl' key={index}>
                    <div className='font-medium text-md'>{transactionItem.expense}</div>
                    <div className='font-medium text-md'>{transactionItem.date}</div>
                    <div className='font-medium text-md text-[#FF3D00]'>{transactionItem.amount}</div>
                    <button type='submit' className='pl-4 pr-4 rounded-lg text-white text-lg bg-red-500 hover:ring-2 hover:ring-offset-2 hover:ring-red-500 transition-all duration-200'  onClick={() => {
                    // get the deleted record
                    retrievedRecordId = transactionHistory.indexOf(transactionItem);
                    
                    // send the amount of deleted record to app.js
                    sendDeletedAmount(parseInt(transactionItem.amount.slice(2)));
                    
                    // delete the record
                    deleteSpecificTransaction(transactionHistory.splice(retrievedRecordId,1));
                  }}>Delete</button>
                  </div>
              }
              
            })}
        </div>
    </div>
    
  )
}

export default TransactionPage