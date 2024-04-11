import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function IncomeExpenses() {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction.Amount);
  const total = amounts.filter((item)=> item > 0).reduce((sum, item)=>{
     return sum +=item;
  }, 0)

  const expense = amounts.filter((item)=>item < 0).reduce((sum, item) =>{
    return sum+=item;
  }, 0)

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
   <p className="money plus">{total}</p>
    </div>
    <div>
      <h4>Expense</h4>
   <p className="money minus">{expense}</p>
    </div>
  </div>
  )
}
