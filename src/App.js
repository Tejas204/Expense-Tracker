import logo from './logo.svg';
import './App.css';
import VerticalNavbar from './components/VerticalNavbar';
import TransactionPage from './components/TransactionPage';
import UserProfileBudget from './components/UserProfileBudget';
import { useState } from 'react';


function App() {

  //This hook will help pass the expense amount to the UserProfileBudget
  const [expenseReceived, getExpenseReceived] = useState(0);

  //This hook will add a deleted transaction amount back the budget
  const [deletedAmount, getDeletedAmount] = useState(0);
  

  return (
    // Main component --> contains the sub components
    // Parent div
    <div className='grid grid-cols-5'>

      {/* This is a vertical navbar component
      *It contains the links for other pages. */}
        <div className='col-span-1'><VerticalNavbar></VerticalNavbar></div>
        <div className='col-span-3'><TransactionPage getExpenseReceived={getExpenseReceived} getDeletedAmount={getDeletedAmount}></TransactionPage></div>
        <div className='col-span-1'><UserProfileBudget expenseReceived={expenseReceived} deletedAmount={deletedAmount}></UserProfileBudget></div>
    </div>
  );
}

export default App;
