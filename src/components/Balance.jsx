import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
    debugger
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions?.map((transaction) => transaction.Amount);
    const total = amounts?.reduce((sum, item)=>{
       return sum +=item;
    }, 0)
  return (
    <div>
        <h4>Balance</h4>
         <h1>Rs.{total}</h1>
    </div>
  )
}
