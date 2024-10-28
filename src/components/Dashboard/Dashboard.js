
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import Chart from '../Chart/Chart'
import { dollar, rupee } from '../../utils/icons'
import { useGlobalContext } from '../../context/GlobalContext'
import History from '../../History/History'


export default function Dashboard() {
   const {totalExpense,totalIncome,totalBalance,getIncome,getExpense,incomes,expenses} =useGlobalContext()

   useEffect(()=>{
    getIncome()
    getExpense()
   },[])

  return (
    <DashboardStyled >
        <InnerLayout>
            <h1>All Transactions</h1>
            <div className="stats-con">
              <div className="chart-con">
                <Chart/>
                
              </div>
              <div className="amount-con">
                  <div className="income">
                    <h2>Total Income</h2>
                    <p>
                      {rupee} {totalIncome()}
                    </p>
                  </div>
                  <div className="expense">
                    <h2>Total Expense</h2>
                    <p>
                      {rupee} {totalExpense()}
                    </p>
                  </div>
                  <div className="balance">
                    <h2>Total balance</h2>
                    <p>
                      {rupee} {totalBalance()}
                    </p>
                  </div>
                </div>
              
              <div className="history-con">
                <History/>
                <h2 className='salary-title'>Min <span>Income</span> Max</h2>
                <div className="salary-item">
                    <p>
                      { incomes.length !==0 ? Math.min(...incomes.map(item=>item.amount)):0}
                    </p>
                    <p>
                      { incomes.length !==0 ? Math.max(...incomes.map(item=>item.amount)):0}
                    </p>
                </div>
                <h2 className='salary-title'>Min <span>Expense</span> Max</h2>
                <div className="salary-item">
                    <p>
                      {expenses.length !==0 ? Math.min(...expenses.map(item=>item.amount)) : 0}
                    </p>
                    <p>
                      { expenses.length !== 0?  Math.max(...expenses.map(item=>item.amount)):0}
                    </p>
                </div>
              </div>
              
            </div>
        </InnerLayout>
    </DashboardStyled >
  )
}


const DashboardStyled  = styled.div`

  .stats-con {
  //? start start-con
    display:grid;
    // grid-template-columns: repeat(5,1fr);
    grid-template-columns: 65% 30%;
    gap:2rem;
    align-items:center;
    grid-auto-row:200px;

    //?start chart-con
    .chart-con{
      // grid-column:1/4;
      // height:400px;
      
      
     
  //?END CHART

    }
  //?END stats-con



    .history-con{
      // grid-column:4/-1;
      h2{
        margin:1rem 0;
        display:flex;
        align-items:center;
        justify-content:space-between;
      }
        .salary-title{
          font-size:1.2rem;
          span{
            font-size:1.8rem;
          }
        }
          .salary-item{
            background:#FCF6F9;
            border:2px solid #FFFFF;
            box-shadow:0 1px 15px rgba(0,0,0,0.06);
            padding:1rem;
            border-radius:20px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            p{
              font-weight:600;
              font-size:1.rem;
            }
          }
    }
    

  }


  .amount-con {
        // display:grid;
        // grid-template-columns: 100%;
        // grid-template-columns:repeat(4,1fr);
        display:flex;
        flex-direction:column;


        gap:2rem;
        margin-top:2rem;
        //?start income,expense
        .income, .expense {
          // grid-column: span 2;
        }
          //?end income,expense
          //?start income,expense,balance
          .income , .expense, .balance {
            background:#FCF6F9;
            border:2px solid #FFFFFF;
            box-shadow:0 1px 15px rgba(0,0,0,0.0.06);
            border-radius:20px;
            padding:1rem;

            p{
              font-weight:700;
              // font-size:3.5rem;
              font-size:1rem;
            }
          }
          //?end income,expense,balance

  //?start balance 
  .balance {
    grid-column:2/4;
    display:flex;
    flex-direction:column;
    justify-content:center;
    // align-items:center;
    p{
      color:var(--color-green);
      opacity:0.6;
      // font-size:4.5rem;
      font-size:1rem;
    }
  }
  //?END BALANCE

      }


  @media (width<=998px){
    .stats-con{
      grid-template-columns:90%;
    }
      .history-con{
      grid-template-columns:2fr;
    }
      .amount-con {
        flex-direction:row;
        justify-content:space-between;
        font-size:0.8rem;
        flex:1;
      }
      
      stats-con .history-con {
        grid-column:span -1;
      }

      .chart-con{
        height: 300px;
      }




  }
    


  
 


`