import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 6rem;
    margin: 3rem 0 5rem 0;
    background: var(--text-black);
`   

export const ContainerNumbers = styled.div`
    max-width: 1220px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 845px){
        flex-direction: column;

        & > div{
            margin: 2rem 0;
        }
    }

`

export const EachNumber = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    
    p:first-child{
        font-family: sans-serif;
        margin-bottom: 0.5rem;
        color: var(--white);
        font-weight: bold;

        span{
            font-size: 1rem;
            margin-left: 0.2rem;
        }
    }

    p:last-child{
        color: #CCC;
    }
`