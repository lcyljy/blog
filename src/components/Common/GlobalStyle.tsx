import React, { FunctionComponent } from 'react'
import { Global, css} from '@emotion/react'

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Myeongjo', serif;
    
  }
  
  :root {
  --font-color: #1d212c;
  --background-color: #ffffff;
  }

  [data-theme="Dark"] {
  --font-color: #ffffff;
  --background-color: #1d212c;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    color: var(--font-color);
    background-color: var(--background-color);

  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`


const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle