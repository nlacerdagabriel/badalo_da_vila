import styled from "styled-components";

export const Container = styled.div`
    height: 550px;
    width: 400px;
    box-shadow: 0px 0px 2px #ccc;
    margin: 1rem;
    transition: 0.2s;

    &:hover{
        transform: translateY(-0.2rem);
    }

`

export const Header = styled.div`
    height: 40%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: flex-end;

    & > div{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        bottom: -60px;
    }
`

export const Price = styled.div`
    width: 120px;
    height: 120px;
    background-color: #FFF;
    box-shadow: 0px 0px 1px #CCC;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    border-radius: 2rem;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content:center;
    }

    div h3{
        font-size: 2.5rem;
        font-family: var(--font-bold);
        color: var(--text-black);
    }

    p{
        color: rgba(0,0,0,0.7);
        font-family: sans-serif;
        margin-top: 0.1rem;
    }
`

export const Plan = styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-family: sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    background-color: var(--blue);
    border-radius: 2rem;
    position: relative;
    top: -40px;
`

export const Body = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;

    ul{
        width: 100%;
    }

    ul li{
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: var(--text-black);
        font-family: sans-serif;
        width: 100%;
        display: flex;
        justify-content: space-between;

        svg{
            color: var(--blue);
            transform: scale(1.5);
        }
    }

    button{
        margin-top:2rem;
        margin-bottom: -2rem;
        box-shadow: 0px 1px 7px rgba(0,0,0,0.15);
}
`