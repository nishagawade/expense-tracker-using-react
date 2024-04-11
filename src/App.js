import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

function App() {
  return (
   <>
   <GlobalProvider>
    <Header/>
    <div className='container'>
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>
    </div>
    </GlobalProvider>
    
   </>
  );
}

export default App;
