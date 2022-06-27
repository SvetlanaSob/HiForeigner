import React from "react";
import {
  DivAboutUsMainCS,
  DivBottomSearchBlockSC,
  DivRecentQMainCS,
  DivLeftSearchBlockSC,
  DivRightSearchBlockSC,
  DivSearchBlocksWrapCS,
  DivSearchMainCS,
  DivSignMainCS,
  DivTextLanguageSC,
  DivTextSearchSC,
  DivWrapMainCS,
  DivSelectTopSC,
  DivSelectBottomSC,
  DivOptionLangs,
  DivSearchSC,
  DivRecQBlockCS,
  DivRecQText,
  DivSignInWrapCS,
  DivTextSigninSC,
  DivBlackSignInBlockSC,
  ImgBlockSignIn,
  DivSignInTextSC,
  DivSignInText2SC,
  DivSigninWordSC,
  DivSignupWordSC,
} from "../../styles/mainpage.styles";

const Mainpage = () => {
  return (
    <DivWrapMainCS>
      <DivSearchMainCS>
        <DivSearchBlocksWrapCS>
          <DivLeftSearchBlockSC>
            <DivSearchSC type="text"></DivSearchSC>
            <DivTextSearchSC>SEARCH</DivTextSearchSC>
          </DivLeftSearchBlockSC>
          <DivTextLanguageSC>LANGUAGE</DivTextLanguageSC>
          <DivRightSearchBlockSC>
            <DivSelectTopSC>
              <DivOptionLangs>Изучаю</DivOptionLangs>
              <DivOptionLangs value="1">Русский</DivOptionLangs>
              <DivOptionLangs value="2">Английский</DivOptionLangs>
            </DivSelectTopSC>
            <DivSelectBottomSC>
              <DivOptionLangs>Владею</DivOptionLangs>
              <DivOptionLangs value="1">Русский</DivOptionLangs>
              <DivOptionLangs value="2">Английский</DivOptionLangs>
            </DivSelectBottomSC>
          </DivRightSearchBlockSC>
          <DivBottomSearchBlockSC />
        </DivSearchBlocksWrapCS>
      </DivSearchMainCS>

      <DivRecentQMainCS>
        <DivRecQBlockCS>
          <DivRecQText>Последние вопросы</DivRecQText>
        </DivRecQBlockCS>
      </DivRecentQMainCS>

      <DivAboutUsMainCS>

        <DivTextSigninSC>Sign in</DivTextSigninSC>
      </DivAboutUsMainCS>

      <DivSignMainCS>
        <DivSignInWrapCS>
          <DivBlackSignInBlockSC>
            <ImgBlockSignIn />
            <DivSignInTextSC type="text" placeholder="Login"/>
            <DivSignInText2SC type="text" placeholder="Password"/>
            <DivSigninWordSC>Войти</DivSigninWordSC>
          <DivSignupWordSC>Зарегистрироваться</DivSignupWordSC>
          </DivBlackSignInBlockSC>
        </DivSignInWrapCS>
      </DivSignMainCS>
    </DivWrapMainCS>
  );
};

export default Mainpage;
