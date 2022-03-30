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

    .hamburguer{
        all: unset;
        cursor: pointer;
        transform: scale(2);
        position: absolute;
        z-index: 3;
        left: 2rem;
        top: 23px;
        display: none;
        
        
        svg{
            color: var(--blue);
        }
    }
    
    .logo{
        display: flex;
        align-items: center;
    }

    h2{
        color: var(--blue);
    }

    @media(max-width: 725px){
        justify-content: center;

        .hamburguer{
            display: flex;
        }
    }

`

export const Contato = styled.ul`
        display: flex;
        align-items: center;
        justify-content: center;

        a{
            cursor: pointer;
            text-decoration: none;
        }
        
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

        @media(max-width: 725px){
            & {
                display: none;
            }
        }
`

export const MenuContainer = styled.div`
height: 100vh;
position: absolute;
overflow: hidden;
display: none;
justify-content: center;
align-items: center;
top: 0;
transition: 0.3s;
left: 0;
background-color: white;
box-shadow: 0px 0px 5px var(--text-gray);



    &.menuOpen{
        width: 400px;
    }

    &.menu{
        width: 0px;
    }

    & > div{
        height: 70%;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
        ul{
            width: 80%;
            min-width: 300px;
            li{
                list-style: none;
                padding: 1rem 1rem;
                font-size: 2rem;

                &:active{
                    background-color: rgba(125,125,125, 0.2);
                }
                
                svg{
                    position: relative;
                    top: 2px;
                    margin-right: 0.5rem;

                    &#gallery, &#feedback, &#contact{
                        margin-right: 1rem;
                    }
                }
            }

        }

        a{
            text-decoration: none;
            min-width: 300px;

            button{
                font-size: 1.5rem;
                width: 100%;
                padding: 3rem 0;
                border-radius: 0.5rem;
            }
        }

    }

    @media(max-width: 725px){
        width: 100%;
        display: flex;

        &.menuOpen{
            width: 80%;
        }
    }
`

