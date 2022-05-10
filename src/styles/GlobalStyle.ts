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
        
    }
    #RouterWrapper{
        width:100%;
        min-height:calc(100vh - 80px);
        max-height:fit-content;
        margin-top:80px;
        overflow-x:hidden;
    }
`;
