import styled from "styled-components";

export const Container = styled.div`
    height: 500px;
    width: 400px;
    margin: 1rem;
    border: 1px solid #CCC;
    transition: 0.2s;
    padding: 2rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;

    &:hover{
        transform: translateY(-0.2rem);
        background-color: var(--blue);
    }

    &:hover svg, &:hover h3, &:hover p, &:hover li, &:hover div {
        color: var(--white) ;   
        border-color:var(--white) ;
    }

 
`

export const Header = styled.div`
    padding-bottom: 2rem;
    border-bottom: 1px solid #CCC;

    svg{
        size: 4rem;
        color: var(--blue);
    }

    h3{
        color: var(--text-black);
        font-size: 1.6rem;
        margin: 1rem 0;
        text-transform: capitalize;
    }

    p{
        font-family: sans-serif;
        color: var(--text-gray);
        line-height: 2rem;
        font-size: 1.1;
        
    }
    `

export const Items = styled.ul`
       margin-top: 2rem;

   li{ 
       margin-left: 1rem;
       font-family: sans-serif;
        list-style: '- ';
        color: var(--text-gray);
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`