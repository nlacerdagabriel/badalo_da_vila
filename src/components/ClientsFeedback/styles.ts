import styled from "styled-components";

export const Container = styled.div`
    margin: 3rem auto 5rem auto;
    max-width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`
