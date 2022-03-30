import styled from "styled-components";

export const Container = styled.div`
    max-width: 1220px;
    margin: 3rem auto 5rem auto;
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
    
    img{
        width: 60%;
        margin-top: 2rem;
    }
    
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

    @media (max-width: 845px){

        p{
            width: 80%;

        }

        h2{
            width: 90%;
            transform: scale(0.8);
            line-height: 4rem;
        }

        img{
            width: 100%;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    button:first-child{
        margin-right: 1rem;
    }

    button{
        border-radius: 0.5rem;
    }
`
