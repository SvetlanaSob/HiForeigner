import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Dots from "../image/dots.png";
import Man from "../image/boyIcon.png";

export const DivRecentQMain2CS = styled.div`
  z-index: 1;
  min-height: 500px;
  height: fit-content;
  background-color: #efefef;
 padding-bottom: 200px;
 display: flex;
 justify-content: center;

  
`;

export const DivQRWrap = styled.div`
display: grid;
margin-top: 200px;
margin-right: 0px;
  z-index: 3;
 width: 1000px;
 

 
  height: fit-content;
  background-color: #efefef;
 // border: 1px solid red;
`;
export const DivQRWrap2 = styled.div`
display: grid;
grid-template-rows: repeat(auto-fit, max-content);
  gap: 40px;
margin-left: 0px;
  z-index: 2;
 width: 1000px;
 margin-top: -100px;

 
  height: fit-content;
  background-color: #efefef;
  //border: 1px solid red;
`;

export const DivBoxQPostP2 = styled.div`
  z-index: 3;
  width: 1000px;
  height: fit-content;
  display: grid;
  gap: 20px;
  justify-self: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;

  background: #fbfbfb;
  border-radius: 30px;
  color: #000000;
  border: 2px solid black;
  margin-left: -200px;
  p {
    margin-top: -150px;
    z-index: 3;
    margin-left: 200px;
    margin-right: 160px;
    margin-bottom: 100px;
    text-align: left;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    //border: 2px solid black;
    /* or 94% */
  }
`;
export const DivDots2 = styled.div`
  z-index: 3;
  background-image: url(${Dots});
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100px;
  background-size: 100%;
opacity: 20%;
  /* position: relative; */
  // border: 2px solid red;
  margin-top: -200px;
  justify-self: end;
  margin-right: 20px;
`;
export const DivDots3 = styled.div`
  z-index: 3;
  background-image: url(${Dots});
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100px;
  background-size: 100%;
opacity: 20%;
  /* position: relative; */
   //border: 2px solid red;
  margin-top: -110px;
 margin-left: 20px;
`;
export const DivMan = styled.div`
  z-index: 3;
  background-image: url(${Man});
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 200px;
  background-size: 100%;

  /* position: relative; */
  // border: 2px solid red;
   margin-top: 0px;
 
  margin-left: 0px;
`;
export const DivMan2 = styled.div`

  z-index: 5;
  background-image: url(${Man});
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  width: 200px;
  background-size: 100%;

  /* position: relative; */
  // border: 2px solid red;
   margin-top: 0px;
 align-self: stretch;
  margin-left: -100px;
`;
export const DivBoxQPostP3 = styled.div`
  z-index: 3;
  width: 1000px;
  height: fit-content;
  display: grid;
  gap: 20px;
  justify-self: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  margin-left:200px;

  background: #FCA745;
  border-radius: 30px;
  color: #000000;
  border: 2px solid black;
  p {
    margin-top: -130px;
    z-index: 3;
    margin-left: 200px;
    margin-right: 160px;
    margin-bottom: 100px;
    text-align: left;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    //border: 2px solid black;
    /* or 94% */
  }
`;