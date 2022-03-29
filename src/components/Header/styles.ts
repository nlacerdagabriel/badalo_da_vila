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
    z-index: 2;
    
    .hamburguer{
        display: flex;
        align-items: center;
    }

    .hamburguer button{
        all: unset;
        cursor: pointer;
        transform: scale(2);
        position: relative;
        left: -3rem;
        z-index: 3;
        

        
        svg{
            color: var(--blue);
        }
    }

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

type MenuContainerProps = {
    width: string
}

export const MenuContainer = styled.div<MenuContainerProps>`
width: ${(props) => props.width};
    height: 100vh;
    position: absolute;
    top: 0;
    transition: 0.3s;
    left: 0;
    background-color: white;
    z-index: 0;
    box-shadow: 0px 0px 5px var(--text-gray);
`
