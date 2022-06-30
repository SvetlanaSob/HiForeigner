import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import MainBack from "../image/bg.png";
import LadySignIn from "../image/woman.png";
import Speaks from "../image/speaks.png";
import Chats from "../image/chats.png";
import Phone from "../image/phone.png";
import { GoPrimitiveDot } from "react-icons/go";
import Dots from "../image/dots.png";

export const DivWrapMainCS = styled.div`
  display: grid;
  grid-template-rows: 900px 900px 1300px 1300px;
`;
export const DivWrapMainLCS = styled.div`
  display: grid;
  grid-template-rows: 900px 900px;
`;
export const DivSearchMainCS = styled.div`
  background-image: url(${MainBack});

  background-repeat: no-repeat;
  background-position: center;
  height: auto;
  width: auto;
  min-width: 1270px;
  background-size: 105%;
  /* opacity: 80%; */
  margin-top: 100px;
  transition: 3s;
  :hover {
    background-size: 100%;
  }
`;
export const DivSearchBlocksWrapCS = styled.div`
  display: grid;
  width: 80vw;
  max-width: 1102px;
  height: 450px;
  /* position: relative; */
  margin: 0 auto;
  margin-top: 100px;
  // border: 2px solid yellow;
`;
export const DivLeftSearchBlockSC = styled.div`
  z-index: 3;
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
export const DivRightSearchBlockSC = styled.div`
  z-index: 1;
  display: grid;
  position: absolute;
  background-color: #fcb447;
  width: 552px;
  height: 280px;
  justify-self: end;
  margin-right: 65px;
  margin-top: 105px;
  box-shadow: 23.1731px 23.1731px 11.5866px rgba(0, 0, 0, 0.25);
  /* border: 2px solid yellow; */
`;
export const DivBottomSearchBlockSC = styled.div`
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
export const DivTextLanguageSC = styled.h1`
  z-index: 2;
  display: grid;
  position: absolute;
  margin-top: 275px;
  margin-right: 125px;
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 140.455px;
  line-height: 108px;
  justify-self: end;
  color: rgba(255, 255, 255, 0.9);
  /* border: 2px solid yellow; */
  pointer-events: none;
`;
export const DivTextSearchSC = styled.h1`
  z-index: 3;
  display: grid;
  position: absolute;
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 140.605px;
  line-height: 106px;
  color: #fcb447;
  text-shadow: 0px 16.0925px 16.7362px rgba(0, 0, 0, 0.25);
  justify-self: end;
  /* border: 2px solid yellow; */
  pointer-events: none;
`;
export const DivSelectBottomSC = styled.select`
  z-index: 2;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  width: 253.78px;
  height: 35.35px;
  justify-self: end;
  opacity: 70%;
  background: rgba(255, 255, 255, 0.78);
  border: 2.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 12.0925px;
  margin-right: 45px;
  margin-top: 120px;
  text-align: center;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  :hover {
    opacity: 90%;
  }
`;
export const DivSelectBottom2SC = styled.select`
  z-index: 2;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  width: 353.78px;
  height: 45.35px;
  justify-self: CENTER;
  opacity: 100%;
  background: WHITE;
  border: 2.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 12.0925px;
  margin-left: 1045px;
  margin-top: 230px;
  text-align: center;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 26.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  :hover {
    opacity: 90%;
  }
`;
export const DivSelectTopSC = styled.select`
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
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  :hover {
    opacity: 90%;
  }
`;
export const DivSelectTop2SC = styled.select`
  z-index: 2;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  justify-self: center;

  width: 353.78px;
  height: 45.35px;
  opacity: 100%;
  margin-top: 140px;
  margin-left: 1045px;
  background: WHITE;
  border: 2.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 12.0925px;
  text-align: center;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 26.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  :hover {
    opacity: 90%;
  }
`;
export const DivOptionLangs = styled.option`
  z-index: 2;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 13.1731px;
  /* identical to box height */
  background-color: white;
`;
export const DivOptionLangs2 = styled.option`
  z-index: 2;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 23.1731px;
  /* identical to box height */
  background-color: white;
`;
export const DivSearchSC = styled.input`
  z-index: 4;
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
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  :hover {
    opacity: 90%;
  }
  :focus {
    border-bottom: 3px solid rgba(0, 0, 0, 0.5);
    outline: none;
  }
`;
export const DivRecentQMainCS = styled.div`
  z-index: 1;
  box-shadow: 0px -10px 40px 50px #efefef;
  opacity: 99%;
  background-color: #efefef;
`;
export const DivRecQBlockCS = styled.div`
  z-index: 2;
  display: grid;
  width: 80vw;
  max-width: 1102px;
  height: 100px;
  /* position: relative; */
  margin: 0 auto;
  margin-top: 15px;
  //border: 2px solid blue;
`;
export const DivRecQText = styled.h1`
  pointer-events: none;
  display: grid;
  position: absolute;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 52.6305px;
  line-height: 40px;
  justify-self: end;
  width: 500px;
  height: 50px;
  margin-right: 280px;

  /* identical to box height, or 0px */
  color: #000000;
  //border: 2px solid red;
`;
export const DivAboutUsMainCS = styled.div`
  z-index: 1;

  display: grid;
  background-color: #6e9c95;
`;
export const DivSignMainCS = styled.div`
  display: grid;
  background-color: white;
`;
export const DivSignInWrapCS = styled.div`
  display: grid;
  width: auto;
  height: 1100px;
  /* position: relative; */
  //border: 2px solid blue;
`;
export const DivTextSigninSC = styled.h1`
  z-index: 2;
  display: grid;
  margin-bottom: 800px;
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 427.98px;
  line-height: 400px;
  justify-self: flex-start;
  margin-top: -75px;
  width: 1225px;
  margin-left: -28px;
  /* identical to box height, or 0px */
  color: rgba(252, 180, 71, 0.86);
  // border: 2px solid RED;
  pointer-events: none;
`;
export const DivBlackSignInBlockSC = styled.div`
  z-index: 0;
  display: grid;
  width: auto;
  align-self: center;
  height: 420px;
  margin-top: -1000px;
  background-color: black;
  /* position: relative; */
  //border: 2px solid blue;
`;
export const ImgBlockSignIn = styled.div`
  z-index: 1;
  background-image: url(${LadySignIn});

  background-repeat: no-repeat;
  background-position: center;
  height: 800px;
  width: 1000px;
  background-size: 100%;
  margin-left: 85px;
  margin-top: -313px;
  transition: 0.8s;
  /* position: relative; */
  //border: 2px solid red;
  :hover {
    margin-left: 65px;
  }
`;
export const DivDots = styled.div`
  z-index: 2;
  background-image: url(${Dots});
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: 100px;
  background-size: 100%;

  /* position: relative; */
  // border: 2px solid red;
  margin-top: -110px;
  margin-left: 650px;
`;
export const DivSignInTextSC = styled.input`
  z-index: 3;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  justify-self: center;
  opacity: 100%;
  width: 506.59px;
  height: 46.35px;
  margin-top: 120px;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 30.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  background: #ffffff;
  border: 1.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 16.0925px;
  transition: 0.1s;
  :hover {
    background: #ededed;
  }
  ::placeholder {
    font-family: "Lusitana";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 0%;
    /* identical to box height, or 0px */
    text-align: center;
    color: rgba(0, 0, 0);
    opacity: 70%;
  }
  :focus {
    border: none;
    border-bottom: 5px solid rgba(252, 180, 71, 0.86);
    outline: none;
  }
`;
export const DivSignInText12SC = styled.input`
  z-index: 3;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  justify-self: center;
  opacity: 100%;
  width: 506.59px;
  height: 46.35px;
  margin-top: 90px;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 30.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  background: #ffffff;
  border: 1.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 16.0925px;
  transition: 0.1s;
  :hover {
    background: #ededed;
  }
  ::placeholder {
    font-family: "Lusitana";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 0%;
    /* identical to box height, or 0px */
    text-align: center;
    color: rgba(0, 0, 0);
    opacity: 70%;
  }
  :focus {
    border: none;
    border-bottom: 5px solid rgba(252, 180, 71, 0.86);
    outline: none;
  }
`;
export const DivSignInText2SC = styled.input`
  z-index: 3;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  justify-self: center;
  opacity: 100%;
  width: 506.59px;
  height: 46.35px;
  margin-top: 210px;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 30.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  background: #ffffff;
  border: 1.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 16.0925px;
  transition: 0.1s;
  :hover {
    background: #ededed;
  }
  ::placeholder {
    font-family: "Lusitana";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 0%;
    /* identical to box height, or 0px */
    text-align: center;
    color: rgba(0, 0, 0);
    opacity: 70%;
  }
  :focus {
    border: none;
    border-bottom: 5px solid rgba(252, 180, 71, 0.86);
    outline: none;
  }
`;
export const DivSignInText22SC = styled.input`
  z-index: 3;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  justify-self: center;
  opacity: 100%;
  width: 506.59px;
  height: 46.35px;
  margin-top: 180px;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 30.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  background: #ffffff;
  border: 1.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 16.0925px;
  transition: 0.1s;
  :hover {
    background: #ededed;
  }
  ::placeholder {
    font-family: "Lusitana";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 0%;
    /* identical to box height, or 0px */
    text-align: center;
    color: rgba(0, 0, 0);
    opacity: 70%;
  }
  :focus {
    border: none;
    border-bottom: 5px solid rgba(252, 180, 71, 0.86);
    outline: none;
  }
`;
export const DivSignInText3SC = styled.input`
  z-index: 3;
  display: grid;
  position: absolute;
  box-sizing: border-box;
  justify-self: center;
  opacity: 100%;
  width: 506.59px;
  height: 46.35px;
  margin-top: 270px;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 30.1731px;
  line-height: 31px;
  /* border: 2px solid yellow; */
  background: #ffffff;
  border: 1.9311px solid rgba(0, 0, 0, 0.5);
  border-radius: 16.0925px;
  transition: 0.1s;
  :hover {
    background: #ededed;
  }
  ::placeholder {
    font-family: "Lusitana";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 0%;
    /* identical to box height, or 0px */
    text-align: center;
    color: rgba(0, 0, 0);
    opacity: 70%;
  }
  :focus {
    border: none;
    border-bottom: 5px solid rgba(252, 180, 71, 0.86);
    outline: none;
  }
`;
export const DivSignupWordSC = styled.button`
  z-index: 3;
  width: auto;
  display: grid;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 20px;
  height: 25px;
  justify-self: center;
  margin-top: -140px;
  text-decoration: none;
  background: none;
  border: none;
  /* identical to box height, or 0px */
  color: #ffffff;
  //border: 2px solid RED;
  cursor: pointer;
`;
export const DivSignupWord1SC = styled(Link)`
  z-index: 3;
  width: auto;
  display: grid;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 20px;
  height: 25px;
  justify-self: center;
  margin-top: -140px;
  text-decoration: none;
  background: none;
  border: none;
  /* identical to box height, or 0px */
  color: #ffffff;
  //border: 2px solid RED;
  cursor: pointer;
`;
export const DivSigninWordSC = styled.button`
  z-index: 3;
  width: auto;
  display: grid;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 35px;
  height: 35px;
  justify-self: center;
  margin-top: -200px;
  background: none;
  border: none;
  text-decoration: none;
  /* identical to box height, or 0px */
  color: #ffffff;
  //border: 2px solid RED;
  cursor: pointer;
`;
export const DivTextAboutusSC = styled.h1`
  z-index: 3;
  display: grid;
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 427.98px;
  line-height: 100px;
  height: 200px;
  margin-top: 59px;
  justify-self: flex-end;
  /* margin-top: 1230px; */
  width: 1558px;
  margin-right: 0px;
  /* identical to box height, or 0px */
  color: rgba(252, 180, 71, 0.86);
  // border: 2px solid RED;
  pointer-events: none;
  opacity: 80%;
`;
export const DivMinitextAbout = styled.h1`
  z-index: 3;
  display: grid;
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 62.6305px;
  line-height: 50px;
  height: 50px;
  width: 1040px;
  margin-top: -420px;
  margin-right: 420px;
  justify-self: flex-end;
  /* identical to box height, or 0px */
  color: #000000;
  // border: 2px solid RED;
  pointer-events: none;
`;
export const Div1Block = styled.div`
  display: grid;
  width: 1503px;
  height: 176px;
  background: #fcb447;
  box-shadow: -6.43698px 30.8975px 21.242px rgba(0, 0, 0, 0.25);
  justify-self: start;
  /* position: relative; */
  //border: 2px solid blue;
  margin-top: -550px;
  grid-template-columns: 176px auto;
  gap: 300px;
`;
export const Div2Block = styled.div`
  display: grid;
  width: 1503px;
  height: 176px;
  background: #000000;
  box-shadow: -6.43698px 30.8975px 21.242px rgba(0, 0, 0, 0.25);
  justify-self: end;
  /* position: relative; */
  // border: 2px solid blue;
  margin-top: -450px;
  grid-template-columns: auto 176px;
  gap: 300px;
`;
export const Div3Block = styled.div`
  display: grid;
  width: 1503px;
  height: 176px;
  background: #ffffff;
  box-shadow: -6.43698px 30.8975px 21.242px rgba(0, 0, 0, 0.25);
  justify-self: start;
  /* position: relative; */
  //border: 2px solid blue;
  margin-top: -350px;
  grid-template-columns: 176px auto;
  gap: 300px;
`;
export const ImgLineAboutUs1 = styled.div`
  background-image: url(${Speaks});
  background-repeat: no-repeat;
  background-position: center;
  height: 176px;
  width: 176px;
  background-size: 90%;
  /* position: relative; */
  //border: 2px solid red;
`;
export const ImgLineAboutUs2 = styled.div`
  background-image: url(${Chats});
  background-repeat: no-repeat;
  background-position: center;
  height: 176px;
  width: 176px;
  background-size: 90%;
  /* position: relative; */
  //border: 2px solid red;
`;
export const ImgLineAboutUs3 = styled.div`
  background-image: url(${Phone});
  background-repeat: no-repeat;
  background-position: center;

  height: 176px;
  width: 176px;

  background-size: 90%;
  /* position: relative; */
  //border: 2px solid red;
`;
export const DivAboutUsText = styled.div`
  //border: 2px solid red;
  display: grid;
  grid-template-rows: 30px 200px;
  margin-left: 20px;
  margin-right: 20px;
  height: 176px;
`;
export const DivAboutUsTextTitle = styled.h1`
  //border: 2px solid green;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 20px;
  /* identical to box height, or 0px */
  height: 30px;
  color: #000000;
  pointer-events: none;
`;
export const DivAboutUsTextp = styled.p`
  // border: 2px solid blue;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 30px;
  /* or 94% */
  color: rgba(0, 0, 0, 0.7);
  pointer-events: none;
`;
export const DivAboutUsTextTitle2 = styled.h1`
  //border: 2px solid green;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 20px;
  height: 30px;
  /* identical to box height, or 0px */
  color: #ffffff;
  pointer-events: none;
`;
export const DivAboutUsTextp2 = styled.p`
  //border: 2px solid blue;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 30px;
  /* or 94% */
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
`;
export const DivMinitextAboutBottom = styled.h1`
  z-index: 4;
  display: grid;

  line-height: 50px;
  height: 50px;
  width: 1040px;
  margin-top: -230px;

  justify-self: center;
  /* identical to box height, or 0px */
  color: #000000;
  //  border: 2px solid RED;
  pointer-events: none;

  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 62.6305px;
  line-height: 0%;
  /* or 0px */
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
export const DivMinitextAboutBottom2 = styled.h1`
  z-index: 4;
  display: grid;

  line-height: 50px;
  height: 50px;
  width: 1040px;
  margin-top: -180px;

  justify-self: center;
  /* identical to box height, or 0px */
  color: #000000;
  // border: 2px solid RED;
  pointer-events: none;

  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-size: 62.6305px;
  line-height: 0%;
  /* or 0px */
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
export const DivBlocks = styled.div`
  // border: 2px solid RED;
  display: grid;
  width: auto;
  height: 400px;
  margin-top: 300px;
`;
export const DivQBlock = styled.div`
  // border: 2px solid RED;
  width: auto;
  height: 300px;
  display: grid;
  grid-template-rows: repeat(auto-fit, max-content);
  gap: 20px;
  width: 80vw;
  max-width: 1102px;
  /* position: relative; */
  margin: 0 auto;
  margin-top: 15px;
`;

export const DivButtonsBlockSC = styled.div`
  z-index: 2;
  // border: 2px solid RED;
  display: grid;
  grid-template-columns: 50px 50px;
  grid-gap: 70px;
  justify-self: end;
  margin-left: 65px;
  width: 340px;
  margin-top: 20px;
  height: 70px;
  /* position: relative; */
`;
export const DivButtonSC = styled(GoPrimitiveDot)`
  z-index: 2;
  // border: 2px solid blue;
  color: black;
  width: 70px;
  height: 70px;

  cursor: pointer;
  color: ${(p) => (p.isActive ? "black;" : "white")}; ;
`;

export const DivBoxCreateQSC = styled.div`
  width: 550px;
  height: 380px;
  display: grid;
  grid-template-rows: 180px 30px;
  gap: 20px;
  max-width: 550px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  // border: 2px solid black;
`;

export const TextAreaCreateQSC = styled.textarea`
  background: initial;
  border-radius: 10px;

  border: 1px solid black;
  border-bottom: 1px solid rgb(121, 66, 95);
  color: black;
  min-height: 150px;
  max-width: 500px;
  font-family: "Source Code Pro", monospace;
  :focus {
    border-bottom: 5px solid rgba(252, 180, 71, 0.86);
    outline: none;
  }
  ::placeholder {
    color: black;
    font-size: 24px;

    text-align: center;
  }
`;
export const ButtonQSC = styled.button`
  background: black;
  border: none;
  color: rgb(230, 245, 255);
  border-radius: 15px;
  cursor: pointer;
  :hover {
    opacity: 80%;
  }
  :active {
    background: black;
    color: red;
    opacity: 100%;
  }
`;
export const DivImgDot = styled(GoPrimitiveDot)`
  color: ${(p) => (p.isActive ? "black;" : "white")};
`;

export const DivBoxQPostP = styled.div`
  z-index: 1;
  width: 800px;
  height: fit-content;
  display: grid;
  gap: 20px;
  justify-self: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
margin-left: 150px;
  background: #fbfbfb;
  border-radius: 30px;
  color: #000000;

  //border: 2px solid black;
  p {
    z-index: 1;
    margin-left: 30px;
    margin-right: 100px;
    text-align: left;
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 30px;
    /* or 94% */
  }
`;
export const UlSearch = styled.ul`
  z-index: 5;

  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  background-color: white;
  opacity: 90%;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 118px;
  margin-left: 45px;
  border: ${(p) => (p.isActive ? "2.9311px solid rgba(0, 0, 0, 0.5);" : null)};

  border-radius: 12.0925px;
  width: 456.59px;
  box-shadow: 0px 16.0925px 16.7362px rgba(0, 0, 0, 0.25);
  max-height: 240px;
  height: auto;
  overflow: auto;
`;
export const LiSearch = styled.li`
  z-index: 5;

  //border: 2px solid blue;
  padding: 10px;
  text-align: left;

  :hover {
    background-color: #fcb447;
    cursor: pointer;
    transition: cubic-bezier(1, 0, 0, 1) 0, 5 s all;
  }
`;

export const ALinkQ = styled.a`
  text-decoration: none;
  color: black;
`;

export const buttonSC = styled.button`
margin-left: 200px;
border: 2px solid blue;

`;