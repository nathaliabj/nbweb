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
    }

    .carousel .slider-wrapper {
        overflow: visible;
    }
    .carousel.carousel-slider {
        overflow: visible;
    }
    .carousel .slide {
        min-width: fit-content !important;
        align-self: center;
    }
    .carousel .slide a{
        opacity: 0;
        transition: opacity ease-in-out .2s;
        width: fit-content;
    }
    .carousel .selected a{
        opacity: 1;
    }
    .carousel .slide img{
        height: 474px;
        transition: height ease-in-out .2s;
    }
    .carousel .selected img{
        height: 550px;
    }
    .carousel .selected img + div {
        opacity: 0;
        background: transparent;
        transition: background ease .2s;
    }

    .carousel .selected img + div {
        display: none;
    }
     .carousel .slide img + div {
        opacity: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: background ease 2s;
    }

`;

export default GlobalStyle;
