import styled from "styled-components";

type ContainerProps = {
    bgColor: string;
}

export const Container = styled.div<ContainerProps>`
    margin: 0 0.3rem;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    border-radius: 999px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid var(--blue);

    svg{
        color: ${(props) => props.color} 
    }

    &:hover{
        background-color: ${(props) => props.bgColor};
    }
`