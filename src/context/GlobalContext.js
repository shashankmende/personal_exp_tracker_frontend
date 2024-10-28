
import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"

const GlobalContext = React.createContext()

export const GlobalProvider = ({children})=>{
    const [incomes,setIncomes]=useState([])
    const [expenses,setExpenses]=useState([])
    const [error,setError]=useState(null)

    //income
    const addIncome = async(income)=>{
        const response = await axios.post(`${BASE_URL}add-income`,income)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        getIncome()
        return response


    }

    const getIncome = async()=>{
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        
    }


    const deleteIncome =async(id)=>{
        await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()

    }


    const totalIncome = ()=>{
        let totalInc = 0;
        incomes.forEach((income)=>{
            totalInc+=income.amount 
        })

        return totalInc


    }

    //expense

    const addExpense = async(income)=>{
        const response = await axios.post(`${BASE_URL}add-expense`,income)
        .catch((err)=>{
            setError(err.response.data.message)
        })
        getExpense()
        return response


    }

    const getExpense= async()=>{
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        
    }


    const deleteExpense =async(id)=>{
        await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()

    }


    const totalExpense = ()=>{
        let totalExp = 0;
        expenses.forEach((income)=>{
            totalExp+=income.amount 
        })

        return totalExp


    }
    
    const totalBalance = ()=>{
        return totalIncome() -totalExpense()
    }

    const transactionHistory = ()=>{
        const history = [...incomes,...expenses]
        history.sort((a,b)=>{
            return new Date(b.createdAt)-new Date(a.createdAt)
        })
        return history.slice(0,3)

    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            incomes,
            expenses,
            getIncome,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpense,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}