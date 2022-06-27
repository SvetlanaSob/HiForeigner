import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Logo from "../image/Logo.svg";

export const DivBoxHeaderSC = styled.div`
  z-index: 1;
  position: absolute;
  height: 110px; 
  width: 100%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 5vw auto auto;
  background: black;
  box-shadow: 0px 10px 40px 40px black;
  grid-gap: 15vw;
  
 
`;
export const ButtonHeaderLangSC = styled.button`
  font-family: 'Source Code Pro', monospace;
  background: initial;
  border: none;
  font-size: 20px;
  color: rgb(230, 245, 255);
 // border: 1px solid red;
  cursor: pointer;
  
`;
export const ButtonHeaderSignInSC = styled.button`
  font-family: 'Source Code Pro', monospace;
  background: initial;
  border: none; 
  font-size: 20px;
  color: rgb(230, 245, 255);
 // border: 1px solid red;
  cursor: pointer;
`;


export const ImgLogoHeaderSC = styled.div`
 // border: 1px solid red;
  background-image: url(${Logo});
  width: 100%;
background-repeat: no-repeat;
background-position: center;
height: 120px;
width: 600px;
background-size: 500px;
margin-top: 20px;
display: grid;
`;