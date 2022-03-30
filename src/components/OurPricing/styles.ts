import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    margin: 3rem auto 5rem auto;
    padding: 0 2rem;

    
    @media (max-width: 845px){
        h2{
            transform: scale(0.8);
            text-align: center;
            line-height: 4rem;
        }
    }
`

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`