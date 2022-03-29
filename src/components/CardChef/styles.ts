import styled from "styled-components";

export const Container = styled.div`
    height: 400px;
    width: 400px;
    margin: 1rem 1rem;
    border: 1px solid #CCC;
    display: flex;
    justify-content:center;
    align-items: center;
    transition: 0.2s;
    overflow: hidden;
    
    & > div{
        transition: 0.3s;
        background-size: cover;
        background-position: center;
        height: 100%;
        width: 100%;
    }

    &:hover > div{
        height: 110%;
        width: 110%;
    }
    `

export const HoverContainer = styled.div`
    padding: 2rem;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
    color: var(--white);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
    &:hover{
        opacity: 1;
    }

    &:hover > .first {
        margin-top: 2rem;
    }

    &:hover > .second {
        margin-bottom: 2rem;
    }

    .second{
        display: flex;
    }

    div{
        transition: 0.3s;

        h3{
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

        p{
            font-family: sans-serif;
            font-weight: bold;
        }

       
    }
`