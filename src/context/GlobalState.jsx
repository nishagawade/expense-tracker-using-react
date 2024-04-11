import React, { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";


export const initialState = {
    transactions : [
    //    {id : "12", name : 'Mobile' , Amount : 40000}  ,
    //    {id : "12", name : 'Bike' , Amount : 100000}   ,
    //    {id : "12", name : 'Income' , Amount : 200000}  ,
    //    {id : "12", name : 'sofa' , Amount : 23000}  ,
    ]
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const AddTransaction = (transactions) =>{
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transactions
        })
    }

    const deleteTransaction = (id) =>{
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        })
    }
    return(
        <GlobalContext.Provider  value={{transactions : state.transactions , AddTransaction , deleteTransaction}}>
           {children}
        </GlobalContext.Provider>
    )
}