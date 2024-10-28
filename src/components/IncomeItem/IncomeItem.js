

import React from 'react'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, rupee, stocks, takeaway, trash, tv, users, yt } from '../../utils/icons'
import Button from '../Button/Button'
import styled from 'styled-components'
import { DateFormat } from '../../utils/DateFormat'

function IncomeItem({type,title,category,id,amount,date,description,deleteItem,indicatorcolor}) {

    const categoryIcon = ()=>{
        switch(category){
            case "salary":
                return money
            case "freelancing":
                return freelance
            case "investments":
                return stocks
            case "stocks":
                return users 
            case "bitcoin":
                return bitcoin
            case "bank":
                return card
            case "youtube":
                return yt
            case "Other":
                return piggy 
            default:
                return ""
            
        }
    }

    const expenseCatIcon = ()=>{
        switch(category){
            case "education":
                return book
            case "groceries":
                return food
            case "health":
                return medical
            case "subscriptions":
                return tv 
            case "takeaways":
                return takeaway
            case "clothing":
                return clothing
            case "youtube":
                return yt
            case "travelling":
                return freelance
            case "Other":
                return circle 
            default:
                return ""
            
        }
    }

  return (
    <IncomeItemStyled indicatorcolor={indicatorcolor}>
        <div className="icon">
            {type==='expense' ? expenseCatIcon() :categoryIcon()}
        </div>
        <div className="content">
            <h5>{title}</h5>
            <div className="inner-content">
                <div className="text">
                    <p>{rupee} {amount}</p>
                    <p>{calender} {<DateFormat/>}</p>
                    <p>
                        {comment}
                        {description}

                    </p>
                </div>
                <div className="btn-con"
                
                onClick={()=>deleteItem(id)}
                >
                    
                    <Button
                    icon={trash}
                    bPad={'1rem'}
                    bRad={'50%'}
                    bg={'var(--primary-color)'}
                    color={"#fff"}
                    hColor={"var(--color-green)"}
                    
                   
                    />
                </div>
            </div>
        </div>
    </IncomeItemStyled>
  )
}


const IncomeItemStyled= styled.div`

    margin-bottom: 1rem;
    background:#FCFCF9;
    border:2px solid #FFFFFF;
    // border:2px solid red;
    box-shadow:0 1px 15px rgba(0,0,0,0.06);
    border-radius:20px;
    padding:1rem;
    display:flex;
    align-items:center;
    gap:1rem;
    width:100%;
    color:#222260; 
    .icon {
    width:80px;
    height:80px;
    border-radius:20px;
    background:#F5F5F5;
    display:flex; 
    align-items:center;
    justify-content:center;
    border:2px solid #FFFFFF;
    i{
        font-size:2.6rem;
    }
    }

    .content{
        flex:1;
        display:flex;
        flex-direction:column;
        gap:.2rem;
        h5{
            font-size:1.3rem;
            padding-left:2rem;
            position:relative;
            &::before{
            
                content:'';
                position:absolute;
                left:0;
                top:50%;
                transform:translateY(-50%);
                width:.8rem;
                height:.8rem;
                border-radius:50%;
                background: ${props=> props.indicatorcolor}

            }
        }
        .inner-content{
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:1.5rem;
            .text{
                 display:flex;
                
                align-items:center;
                gap:.5rem;
                p{
                 display:flex;
                 gap:0.5rem;
                align-items:center;
                color:var(--primary-color);
                opacity:.8;
                }
            }
        }
    }

`

export default IncomeItem