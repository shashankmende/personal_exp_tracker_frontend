import styled from "styled-components";


export const MainLayouts = styled.div`

    padding:2rem;
    height:100%;
    // display:flex;
    gap:2rem;
    display:grid;
    grid-template-columns:25% 70%;

    @media (width<=768px){
        grid-template-columns: 1fr;
    }

    

    

`

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width:100%;
    
`
