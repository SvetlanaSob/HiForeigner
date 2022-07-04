import React from "react";
import {
  ButtonHeaderLangSC,
  ButtonHeaderSignInSC,
  DivBoxHeaderSC,
  ImgLogoHeaderSC,
} from "../../styles/header.styles";
import { useNavigate } from "react-router-dom";
import { ButtonReturn } from "../../styles/mainpage.styles";
import { BsArrowReturnLeft } from "react-icons/bs";

const Header = (props) => {
  let navigate = useNavigate();
  return (
    <DivBoxHeaderSC>
      <div><ButtonHeaderLangSC>Язык:Русский</ButtonHeaderLangSC> <ButtonReturn onClick={() => navigate(-1)}><BsArrowReturnLeft size="50px" color="white"/></ButtonReturn></div>
      <ImgLogoHeaderSC to="/"></ImgLogoHeaderSC>
      <ButtonHeaderSignInSC to="/signin">Вход</ButtonHeaderSignInSC>
    </DivBoxHeaderSC>
  );
};

export default Header;
