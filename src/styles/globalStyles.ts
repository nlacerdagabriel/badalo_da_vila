import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #FFF;
        --blue: #48487F;
        --blue-hover:#2e2e59;
        
        --text-gray: #686a6f;
        --text-black: #1c1c1c;
        --title-size: 3.5rem;
        --icon-size: 3rem;

        --font-bold: 'Lato', sans-serif;

    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{

        scroll-behavior: smooth;

        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Merienda', cursive;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a{
        text-decoration: none;
    }
`

