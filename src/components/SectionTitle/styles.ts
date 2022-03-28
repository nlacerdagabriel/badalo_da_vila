import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3rem;
    

    h2{
        color: var(--text-black);
        font-size: var(--title-size);
        margin-bottom: 1rem;
    }

    svg{
        font-size: var(--icon-size);
        color: var(--blue);
    }

`