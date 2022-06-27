import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import MainBack from "../image/bg.png";
import LadySignIn from "../image/woman.png";

export const DivWrapMainCS=styled.div`
display: grid;
grid-template-rows: 900px 1300px 1300px 1300px;

`;
export const DivSearchMainCS=styled.div`
background-image: url(${MainBack});

background-repeat: no-repeat;
background-position: center;
height:auto;
width: auto;
min-width: 1270px;
background-size: 105%;
/* opacity: 80%; */
margin-top: 100px;
transition: 3s;
:hover{
    background-size: 100%;
}
`;
export const DivSearchBlocksWrapCS=styled.div`
display: grid;
width: 80vw;
max-width: 1102px;
height: 450px;
/* position: relative; */
margin: 0 auto;
margin-top: 100px;
 //border: 2px solid yellow; 
`;
export const DivLeftSearchBlockSC=styled.div`
z-index: 2;
display: grid;
position: absolute;
background-color: white;
width: 550px;
height: 280px;
margin-right: 410px;
justify-self: end;
box-shadow: -6.43698px 30.8975px 21.242px rgba(0, 0, 0, 0.25);
/* border: 2px solid yellow; */
`;
export const DivRightSearchBlockSC=styled.div`
z-index: 1;
display: grid;
position: absolute;
background-color: #FCB447;
width: 552px;
height: 280px;
justify-self: end;
margin-right: 65px;
margin-top: 105px;
box-shadow: 23.1731px 23.1731px 11.5866px rgba(0, 0, 0, 0.25);
/* border: 2px solid yellow; */
`;
export const DivBottomSearchBlockSC=styled.div`
z-index: 0;
display: grid;
position: absolute;
background-color: black;
width: 538px;
height: 250px;
justify-self: end;
margin-right: 230px;
margin-top: 170px;
box-shadow: -6.43698px 30.8975px 21.242px rgba(0, 0, 0, 0.25);
/* border: 2px solid yellow; */
`;
export const DivTextLanguageSC=styled.h1`
z-index: 2;
display: grid;
position: absolute;
margin-top: 275px;
margin-right: 125px;
font-family: 'Lusitana';
font-style: normal;
font-weight: 400;
font-size: 140.455px;
line-height: 108px;
justify-self: end;
color: rgba(255, 255, 255, 0.9);
/* border: 2px solid yellow; */
pointer-events: none;
`;
export const DivTextSearchSC=styled.h1`
z-index: 2;
display: grid;
position: absolute;
font-family: 'Lusitana';
font-style: normal;
font-weight: 400;
font-size: 140.605px;
line-height: 106px;
color: #FCB447;
text-shadow: 0px 16.0925px 16.7362px rgba(0, 0, 0, 0.25);
justify-self: end;
/* border: 2px solid yellow; */
pointer-events: none;
`;
export const DivSelectBottomSC=styled.select`
z-index: 2;
display: grid;
position: absolute;
box-sizing: border-box;
width: 253.78px;
height:35.35px;
justify-self: end;
opacity: 70%;
background: rgba(255, 255, 255, 0.78);
border: 2.9311px solid rgba(0, 0, 0, 0.5);
border-radius: 12.0925px;
margin-right: 45px;
margin-top: 120px;
text-align: center;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 16.1731px;
line-height: 31px;
/* border: 2px solid yellow; */
:hover{
    opacity: 90%;
}
`;
export const DivSelectTopSC=styled.select`
z-index: 2;
display: grid;
position: absolute;
box-sizing: border-box;
justify-self: end;

width: 253.78px;
height: 35.35px;
opacity: 70%;
margin-top: 60px;
margin-right: 45px;
background: rgba(255, 255, 255, 0.78);
border: 2.9311px solid rgba(0, 0, 0, 0.5);
border-radius: 12.0925px;
text-align: center;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 16.1731px;
line-height: 31px;
/* border: 2px solid yellow; */
:hover{
    opacity: 90%;
}
`;
export const DivOptionLangs=styled.option`
z-index: 2;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 13.1731px;
/* identical to box height */
background-color: white;


`;
export const DivSearchSC=styled.input`
z-index: 3;
display: grid;
position: absolute;
box-sizing: border-box;
justify-self: center;
opacity: 80%;
width: 456.59px;
height: 35.35px;
margin-top: 130px;
background: rgba(255, 255, 255, 0.78);
border: 2.9311px solid rgba(0, 0, 0, 0.5);
border-radius: 12.0925px;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 16.1731px;
line-height: 31px;
/* border: 2px solid yellow; */
:hover{
    opacity: 90%;
}
`;
export const DivRecentQMainCS=styled.div`
box-shadow: 0px -10px 40px 50px #FBFBFB;
opacity: 99%;
background-color: #FBFBFB;

`;
export const DivRecQBlockCS=styled.div`
display: grid;
width: 80vw;
max-width: 1102px;
height: 1100px;
/* position: relative; */
margin: 0 auto;
margin-top: 15px;
 border: 2px solid blue;
`;
export const DivRecQText=styled.h1`
pointer-events: none;
display: grid;
position: absolute;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 52.6305px;
line-height: 40px;
justify-self:end;
width: 500px;
height: 50px;
margin-right: 280px;
/* identical to box height, or 0px */
color: #000000;
 //border: 2px solid red;
`;
export const DivAboutUsMainCS=styled.div`
z-index: 1;

display: grid;
background-color: #6E9C95;
`;
export const DivSignMainCS=styled.div`
display: grid;
background-color: white;
`;
export const DivSignInWrapCS=styled.div`
display: grid; 
width: auto;
height: 1100px;
/* position: relative; */
 //border: 2px solid blue;

`;
export const DivTextSigninSC=styled.h1`
z-index: 2;
display: grid;
margin-bottom: 800px;
font-family: 'Lusitana';
font-style: normal;
font-weight: 400;
font-size: 427.98px;
line-height: 400px;
margin-top: 0px;
justify-self: flex-start;
margin-top: 1230px;
width: 1225px;
margin-left: -28px;
/* identical to box height, or 0px */
color: rgba(252, 180, 71, 0.86);
// border: 2px solid RED;
pointer-events: none;
`;
export const DivBlackSignInBlockSC=styled.div`
z-index: 0;
display: grid; 
width: auto;
align-self: center;
height: 420px;
margin-top: 150px;
background-color: black;
/* position: relative; */
 //border: 2px solid blue;
`;
export const ImgBlockSignIn=styled.div`
z-index: 1;
background-image: url(${LadySignIn});

background-repeat: no-repeat;
background-position: center;
height:800px;
width: 1000px;
background-size: 100%;
margin-left: 85px;
margin-top: -313px;
transition: 0.8s;
/* position: relative; */
 //border: 2px solid red;
 :hover{
    margin-left: 65px;
 }
`;
export const DivSignInTextSC=styled.input`
z-index: 3;
display: grid;
position: absolute;
box-sizing: border-box;
justify-self: center;
opacity: 100%;
width: 506.59px;
height: 46.35px;
margin-top: 120px;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 30.1731px;
line-height: 31px;
/* border: 2px solid yellow; */
background: #FFFFFF;
border: 1.9311px solid rgba(0, 0, 0, 0.5);
border-radius: 16.0925px;
transition: 0.8s;
:hover{
    background: rgba(0 0 0 0);
}
::placeholder{
    font-family: 'Lusitana';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 0%;
/* identical to box height, or 0px */
text-align: center;
color: rgba(0, 0, 0);
opacity: 70%;
}
`;
export const DivSignInText2SC=styled.input`
z-index: 3;
display: grid;
position: absolute;
box-sizing: border-box;
justify-self: center;
opacity: 100%;
width: 506.59px;
height: 46.35px;
margin-top: 210px;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 30.1731px;
line-height: 31px;
/* border: 2px solid yellow; */
background: #FFFFFF;
border: 1.9311px solid rgba(0, 0, 0, 0.5);
border-radius: 16.0925px;
transition: 0.8s;
:hover{
    opacity: 90%;
    
}
::placeholder{
font-family: 'Lusitana';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 0%;
/* identical to box height, or 0px */
text-align: center;
color: rgba(0, 0, 0);
opacity: 70%;
}
`;
export const DivSignupWordSC=styled.h1`
z-index: 3;
width: auto;
display: grid;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height:20px;
height: 25px;
justify-self: center;
margin-top: -140px;
/* identical to box height, or 0px */
color: #FFFFFF;
//border: 2px solid RED;
cursor: pointer;
`;
export const DivSigninWordSC=styled.button`
z-index: 3;
width: auto;
display: grid;
font-family: 'Playfair Display';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height:35px;
height: 35px;
justify-self: center;
margin-top: -200px;
background: none;
border: none;
/* identical to box height, or 0px */
color: #FFFFFF;
//border: 2px solid RED;
cursor: pointer;
`;
