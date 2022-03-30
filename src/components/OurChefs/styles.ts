import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    margin: 3rem auto 5rem auto;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 845px){
        h2{
            transform: scale(0.8);
            text-align: center;
            line-height: 4rem;
        }
    }

    `

export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-wrap: wrap;    
    `
    