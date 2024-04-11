import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction({transaction}) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.Amount < 0 ? '-' : '+';

 // const {transactions} = useContext(GlobalContext)
  return (
    <li className={transaction.Amount < 0 ? 'minus' : 'plus'}>
    {transaction.name} 
    <span>{sign}{transaction.Amount}
    </span> 
     <button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}
