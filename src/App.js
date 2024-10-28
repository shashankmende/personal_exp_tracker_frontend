import styled from "styled-components";
import bg from './images/bg.png';
import { MainLayouts } from "./styles/Layouts";
import Orb from "./components/Orb/Orb"; // Fix the typo here
import Navigation from "./components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Dashboard/Incomes/Incomes";
import Expenses from "./components/Dashboard/Expenses/Expenses";
import { useGlobalContext } from "./context/GlobalContext";


function App() {
  const [active,setActive]=useState(1)

  const global = useGlobalContext()
  console.log(global)

  const displayData =()=>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 3:
        return <Income/>
      case 4: 
        return <Expenses/>
      default:
        return <Dashboard/>
    }

  }

  
  const orbMemo = useMemo(()=>{
    return <Orb/>
  },[])

  return (
    <AppStyled className="App">
      {orbMemo}
      
      <MainLayouts>
        <Navigation active={active} setActive = {setActive}/>
        <main>
            {displayData()}
        </main>
      </MainLayouts>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative; 
  
  main{
    flex:1;
    background-color:rgba(252,246,249,0.78);
    border:3px solid #FFFFFF;
    border-radius:32px;
    backdrop-filter:blur(4.5px)
    
    overflow:auto;
    overflow-x:hidden;
    &::-webkit-scrollbar{
    width:0
    }
  }
`;

export default App;
