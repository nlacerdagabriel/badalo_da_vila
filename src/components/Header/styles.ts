import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background-color: var(--white);
    box-shadow: 0px 1px 5px rgba(0,0,0,0.3);
    z-index: 9;

    h2{
        color: var(--blue);
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;

        li:last-child{
            margin-left: 2rem;
        }

        li{
            list-style: none;
            font-family: sans-serif;

            display: flex;
            align-items: center;
            color: var(--blue);


            svg{
                margin-right: 0.5rem;
                color: var(--blue);
            }
        }
    }
`

