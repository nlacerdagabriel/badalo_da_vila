import styled from 'styled-components'

type ButtonProps = {
    textColor: string;
    primaryColor: string;
    hoverColor: string;
}

export const Button = styled.button<ButtonProps>`
    padding: 1.2rem 2rem;
    text-transform: uppercase;
    color: ${props => props.textColor};
    background-color: ${props => props.primaryColor};
    transition: 0.2s;
    border: none;
    font-family: "Helvetica";
    font-weight: 900;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        margin-left: 1rem;
        position: relative;
        top: 1px;
    }

    &:hover{
        background-color: ${props => props.hoverColor};
    }
`