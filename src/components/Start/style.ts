import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    background-color: lightgray;
    width: 100%;
    height: calc(100vh - 60px);
    animation-name:BackgroundStartMove;
    animation-duration:3s;
    animation-fill-mode: forwards;
    @keyframes BackgroundStartMove {
        0%{

        }
        60%{
            height: calc(100vh - 60px);
        }
        100%{
            height: 0px;
            display:none;
        }
    }
  `,
  Logo: styled.img`
    position: absolute;
    animation-name: ImgstartMove;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    left: -50px;
    bottom: 40%;
    @keyframes ImgstartMove {
      0% {
        left: -500px;
        bottom: 40%;
      }
      
      60% {
        bottom: 40%;
        left: 40%;
      }
      100% {
        left: 40%;
        bottom: 100%;
        display:none;
      }
    }
  `,
};
