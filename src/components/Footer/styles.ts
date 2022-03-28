import styled from "styled-components";

export const Container = styled.div`
    max-width: 965px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .lineOne{
        padding: 5rem 0 2rem 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;


        ul{
            
        display: flex;

            li{
                list-style: none;
                margin: 0 1rem;
                font-family: sans-serif;
                color: var(--text-gray);
            }
        }

        & > div {
            display: flex;

            div{
            background-color: white !important;
            transform: scale(1.2);
            margin: 0 0.5rem;

            &:hover{
                background: var(--blue-hover) !important;

                svg{
                    color: white !important;
                }
            }
        }
        }
    }

    .lineTwo{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        border-top: 1px solid var(--text-gray);


        p{
            font-family: sans-serif;
            color: var(--text-gray);

            span{
                font-weight: bold;
            }
        }
    }

`