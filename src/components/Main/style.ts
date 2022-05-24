import styled from "styled-components";
import { color, pageSize, pxToRem } from "../../styles";

export const S = {
  TotalWrapper: styled.div`
    min-width: 100%;
    max-width: fit-content;
    min-height: ${pageSize};
    background-color: ${color.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  CenterWrapper: styled.div`
    width: 1000px;
    min-height: 700px;
    height:fit-content;
    margin: 60px 40px 60px 40px;
    border-radius: 7px;
    background-color: white;
    display:flex;
    flex-direction:column;
    align-items:center;
    
  `,
  Title: styled.p`
    font-family: "SuncheonB";
    font-size:${pxToRem(25)}rem;
    margin-top:50px;
  `,
  SearchWrapper:styled.div`
    border:1px solid lightgray;
    width:80%;
    height:50px;
    margin-top:50px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    transition: 0.3s;
    :focus-within{
        border-color:black;
        transition: 0.3s;
    }
    >input{
        font-size:20px;
        width:calc(100% - 50px);
        padding:0 10px 0 10px;
        height:100%;
    }
    >img{
        margin-right:10px;
    }
  `,
};
