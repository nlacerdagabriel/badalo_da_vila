import styled from "styled-components";

export const Container = styled.div`
    width: 1220px;
    margin: 3rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    h2{
        width: 60%;
        text-align: center;
        font-size: var(--title-size);
        color: var(--text-black);
        line-height: 4rem;
        margin-bottom: 1.5rem;
        margin-top: 2.5rem;

        span{
            color: var(--blue);
        }
    };

    p{
        width: 60%;
        text-align: center;
        color: rgba(0,0,0,0.7);
        font-family: sans-serif;
        line-height: 1.5rem;
        margin-bottom: 3rem;
        font-weight:500;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button:first-child{
        margin-right: 1rem;
    }
`