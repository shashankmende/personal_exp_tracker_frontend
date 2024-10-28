
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../../styles/Layouts'
import { useGlobalContext } from '../../../context/GlobalContext'
import Form from '../../Form/IncomeForm'
import IncomeItem from '../../IncomeItem/IncomeItem'
import { rupee } from '../../../utils/icons'

export default function Income() {

    const {addIncome,incomes,getIncome,deleteIncome,totalIncome}=useGlobalContext()

    useEffect(()=>{
        getIncome()
    },[])
    
  return (
    <IncomeStyled >
        <InnerLayout>
            <h1>Incomes</h1>
            <h2 className="total-income">Total Income: <span>{rupee} {totalIncome()}</span></h2>
            <div className="income-content">
                <div className="form-container">
                    <Form/>
                </div>
                <div className="incomes">
                    {incomes.map((income)=>{
                        const {_id,title,amount,date,category,description,type} = income 
                        return <IncomeItem
                        key={_id} 
                        id={_id}
                        title={title}
                        description={description}
                        amount={amount}
                        category={category}
                        date={date}
                        type={type}
                        indicatorcolor="var(--color-green)"
                        deleteItem={deleteIncome}
                        />
                    })}
                </div>
            </div>

        </InnerLayout>
    </IncomeStyled >
  )
}


const IncomeStyled  = styled.div`

    display:flex;
    overflow:auto;

    .total-income{
        display:flex;
        justify-content:center;
        align-items:center;
        background:#FCF6F9;
        border:2px solid #FFF;
        box-shadow:0 1px 15px rgba(0,0,0,0.06);
        border-radius:20px;
        padding:1rem;
        margin:1rem 0;
        font-size:2rem;
        gap:.5rem;
        span{
        font-size:2.5rem;
        font-weight:800;
        color:var(--color-green);
        }

    }

    .income-content{
        display:flex;
        gap:2rem;
        .incomes {
            flex:1;
            
            
        }
    }

    @media (width<=998px){
    
        .income-content{
        
            flex-direction:column;
        }
    }

`