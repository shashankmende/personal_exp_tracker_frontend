

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

export default function Orb() {

  const {width,height}=useWindowSize()
  

  const moveOrb = keyframes`
  
  0%{
    transform:translate(0,0);
  }
  50%{
  transform:translate(${width/1.2}px,${height/2}px);  }
  100%{
  transform:translate(0,0);
  }
  `;



    const OrbStyled = styled.div`
    
    width:70vh;
    height:70vh;
    position:absolute;
    border-radius:50%;
    margin-left:-37vh;
    margin-top:-37vh;
    
    background-image:linear-gradient(180deg,#F56692 100%,#F2994A 100%);
    // background-image:linear-gradient(180deg,red 100%,#F2994A 100%);
   
    filter:blur(400px);
    animation: ${moveOrb} 1s alternate linear infinite;
    `;
 

  return (
    <OrbStyled></OrbStyled>
  )
}
