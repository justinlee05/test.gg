import styled from "styled-components";

export const S = {
  TotalWrapper: styled.div`
    background-color: lightgray;
    position:fixed;
    width: 100%;
    height: calc(100vh - 60px);
    animation-name:BackgroundStartMove;
    animation-duration:1.5s;
    animation-fill-mode: forwards;
    @keyframes BackgroundStartMove {
        60%{
            height: calc(100vh - 60px);
        }
        100%{
            height: 0px;
            display:none;
        }
    }
  `,
  Logo: styled.div`
    position: fixed;
    width:0px;
    height:0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    animation-name: ImgstartMove;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    left: -500px;
    bottom: 40%;
    @keyframes ImgstartMove {
      0% {
        bottom: 50%;
      }
      60% {
        bottom: 50%;
        left:50%;
      }
      100% {
        bottom: 100%;
        left:50%;
        display:none;
      }
    }
  `,
};
