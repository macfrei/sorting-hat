import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: border-box;
}

:root {
    --gryffindor-red: #740001;
    --gryffindor-gold: #D3A625;

    --slytherin-green: #1A472A;
    --slytherin-silver: #5D5D5D;

    --hufflepuff-yellow: #FFD800;
    --hufflepuff-black: #000000;

    --ravenclaw-blue: #0E1A40;
    --ravenclaw-bronze: #946B2D;
}

body {
    margin:0;
    font-family: sans-serif;
    font-size: 112.5%;
    line-height: 1.4;
    font-family: 'Galdeano', sans-serif;
}

button, input {
    font-size: inherit;
}
`
