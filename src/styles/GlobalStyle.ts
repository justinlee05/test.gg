import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        outline:none;
        border:none;
        padding:0px;
        margin:0px;
        box-sizing:border-box;
        -webkit-user-select:none; 
        -moz-user-select:none; 
        -ms-user-select:none; 
        user-select:none;
        font-family: Nanum Gothic;
        img{
            -webkit-user-drag: none;
        }
        @font-face {
      font-family: "SuncheonB";
      src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/SuncheonB.woff")
        format("woff");
      font-weight: normal;
      font-style: normal;
    }
        
    }
    #RouterWrapper{
        min-width:100%;
        width:fit-content;
        height:fit-content;
        margin-top:60px;
    }
`;
