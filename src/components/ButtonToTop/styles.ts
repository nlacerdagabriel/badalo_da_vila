import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    background-color: var(--blue);
    animation: mymove 1000ms infinite;
    cursor: pointer;

@keyframes mymove {
  0%   {transform: translateY(0rem);}
  50%   {transform: translateY(0.5rem);}
  100%  {transform: translateY(0rem);}
}

    svg{
        transform: scale(2);
        color: var(--white);
    }
`