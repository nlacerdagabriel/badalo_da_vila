import styled from "styled-components";

export const Container = styled.div`
    margin: 3rem auto 5rem auto;
    max-width: 1440px;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

    & > div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    
    @media (max-width: 845px){
        h2{
            transform: scale(0.8);
            text-align: center;
            line-height: 4rem;
        }
    }
`
