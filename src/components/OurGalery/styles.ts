import styled from 'styled-components'



export const Container = styled.div`
    max-width: 1120px;
    margin: 3rem auto 5rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 350px);
    gap: 3rem;
    
    & > div{
        height: 350px;
        overflow: hidden;
        
        div{
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            
            transition: 0.4s;
            &:hover{
            transform: scale(1.1);
        }
        }
    }

`
