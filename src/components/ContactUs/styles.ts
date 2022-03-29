import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 6rem 0;
    background-color: var(--text-black);
`

export const ContainerContent = styled.div`
    max-width: 1440px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0 auto;

    & > div{
        max-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 2rem 0;
    }

    h2{
        margin-bottom: 1rem;
        line-height: 1.5rem;
        color: var(--white);
        padding: 0.5rem;
    }
    
    p{
        font-family: sans-serif;
        font-size: 1.1rem;
        color: var(--white);
        margin-bottom: 1rem;
    }

    a{
        text-decoration: none;
    }  

    .contato button, .endereco button{
        border-radius: 0.5rem;
        margin: 0.5rem 0;
        border: 2px solid var(--blue);
    }

    .contato > div{
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        div{
            transform: scale(1.2);
            margin: 0 1rem;
            background-color: var(--text-black);

            &:hover{
                background-color: var(--blue);
            }
        }
    }

    .endereco button{
        border-radius: 0.5rem;
    }

    .ifood button{
        border-radius: 0.5rem;
    }

    .ifood .horario {
        margin-top: 2rem;
    }

    .ifood p{
        margin-top: 2rem;
    }

    @media(max-width: 845px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`