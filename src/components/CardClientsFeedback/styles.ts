import styled from "styled-components";

export const Container = styled.div`
    height: 400px;
    width: 400px;
    box-shadow: 0px 0px 2px #ccc;
    margin: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding: 0 3rem;

    img{
        border-radius: 99px;
    }

    svg{
        color: #ccc6;
    }

    p{
        text-align: center;
        color: rgba(0,0,0,0.7);
        font-family: sans-serif;
        line-height: 1.5rem;
    }

    .name{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3{
            font-size: 1.6rem;
            color: var(--text-black);
            margin-bottom: 0.3rem;
        }

        p{
            font-family: sans-serif;
            color: var(--blue);
            text-transform: uppercase;
        }
    }

    .stars{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`