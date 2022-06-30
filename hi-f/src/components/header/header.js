import React from "react";
import {
  ButtonHeaderLangSC,
  ButtonHeaderSignInSC,
  DivBoxHeaderSC,
  ImgLogoHeaderSC,
} from "../../styles/header.styles";

const Header = (props) => {
  return (
    <DivBoxHeaderSC>
      <ButtonHeaderLangSC>Язык:Русский</ButtonHeaderLangSC>
      <ImgLogoHeaderSC to="/"></ImgLogoHeaderSC>
      <ButtonHeaderSignInSC to="/signin">Вход</ButtonHeaderSignInSC>
    </DivBoxHeaderSC>
  );
};

export default Header;
