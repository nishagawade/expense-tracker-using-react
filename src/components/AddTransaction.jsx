import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
  const {AddTransaction}  = useContext(GlobalContext)
  const [name, setName]  = useState("");
  const [Amount, setAmount] = useState(0);

 const handleSubmit = (e) =>{

     e.preventDefault()
     const newTransaction = {
      id : Math.floor(Math.random()*10000000000),
      name, 
      Amount : +Amount
     }

     AddTransaction(newTransaction)
     setName("");
     setAmount("");

  }
  return (
    <>
    <h3>Add new transaction</h3>
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input type="number" value={Amount}  onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  </>
  )
}
