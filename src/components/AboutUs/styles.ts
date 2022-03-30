import styled from 'styled-components'
import padeiro from '../../assets/padeiro.jpg'

export const Container = styled.div`
    max-width: 1220px;
    padding: 4rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: var(--text-black);


    @media (max-width: 1220px){
        & {
            flex-direction: column;
        }
    }
`
export const Image = styled.div`
    height: 30rem;
    width: 40%;
    background-image: url(${padeiro});
    background-position: center;
    background-size: cover;
    position: relative;

   div{
    display: flex;
    align-items: center;
    height: 7rem;
    width: 20rem;
    background: var(--white);
    position: absolute;
    right: -4rem;
    top: 1.5rem;
    box-shadow: 0px 0px 5px #CCC;

    img{
        margin: 0 2rem;
        border-radius: 99px;
    }

    p{
        font-weight: bold;
        font-size: 1.1rem;

        span{
            color: var(--blue);
        }
    }
   }

   @media (max-width: 1220px){
        & {
            width: 500px;
        }
    }

   @media (max-width: 625px){
        & {
            margin-bottom: 1rem;
            width: 90%;
        }
    }
`

export const ContainerText = styled.div`
    width:45%;

    & > p:first-child{
        color: var(--blue);
        font-weight: bold;
        font-family: sans-serif;
        margin-bottom: 1rem;
    }

    h2{
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
    
    p{
        color: var(--text-gray);
        font-family: sans-serif;
        line-height: 1.8rem;
    }

    
   @media (max-width: 1220px){
        & {
            width: 500px;

            p, h2, h3{
                text-align: center;
            }

            button{
                margin: 0 auto;
            }
        }
    }

    @media (max-width: 625px){
        & {
            width: 90%;
            justify-content: center;
            align-items: center;

            h2{
                margin: 0 auto;
                transform: scale(0.8);
            }
        }
    }

    @media (max-width: 845px){
        h2{
            transform: scale(0.8);
            text-align: center;
        }
    }

    `

export const OurMission = styled.div`
    margin: 1.5rem 0;
    
    h3{
        margin-bottom: 1.5rem;
        font-weight: bold;
        font-family: sans-serif;
    }
`