import logo from './logo.svg';
import './App.css';
import VerticalNavbar from './components/VerticalNavbar';
import TransactionPage from './components/TransactionPage';
import UserProfileBudget from './components/UserProfileBudget';


function App() {
  return (
    // Main component --> contains the sub components
    // Parent div
    <div className='grid grid-cols-4'>

      {/* This is a vertical navbar component
      *It contains the links for other pages. */}
        <div className='col-span-1'><VerticalNavbar></VerticalNavbar></div>
        <div className='col-span-2'><TransactionPage></TransactionPage></div>
        <div className='col-span-1'><UserProfileBudget></UserProfileBudget></div>
      
    </div>
  );
}

export default App;
