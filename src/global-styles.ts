import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: "Bigilla";
        src: url("/fonts/Bigilla/Bigilla.otf");
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: "Bigilla";
        src: url("/fonts/Bigilla/Bigilla-Bold.otf");
        font-style: Bold;
        font-weight: 700;
        font-display: swap;
    }

    @font-face {
        font-family: "Visuelt";
        src: url("/fonts/visuelt/visuelt-light.otf");
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }

    body {
        display: block;
        width: 100%;
        height: 100vh;
        background: #171A22;
        color: white;
        margin: 0;
        padding: 0;
        font-family: 'Visuelt';
        overflow-x: hidden;
    }

`;

export default GlobalStyle;
