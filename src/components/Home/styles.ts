import styled from 'styled-components'
import bgImage from '../../assets/bgImage.jpg'




export const Container = styled.div`
    position: relative;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center     ;
    height: 100vh;
    `

export const DarkBg = styled.div`
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const ContainerContent = styled.div`
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    
    p:first-child{
        font-size: 1.5rem;
    }
    
    .descText{
        width: 60%;
    }
    
    h2{
        text-transform: capitalize;
        font-size: var(--title-size);
        width: 50%;
        margin: 0.5rem 0;
        line-height: 4rem;
    }
    `

export const ContainerButton = styled.div`
    display: flex;
    
    button{
        margin-top: 2rem;
    }
    
    button:first-child{
        margin-right: 1rem;
    }
    
    
`