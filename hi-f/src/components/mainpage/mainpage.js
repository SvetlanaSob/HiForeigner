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
  DivTextAboutusSC,
  DivMinitextAbout,
  Div1Block,
  Div2Block,
  Div3Block,
  DivAboutUsText,
  ImgLineAboutUs1,
  ImgLineAboutUs2,
  ImgLineAboutUs3,
  DivAboutUsTextTitle,
  DivAboutUsTextp,
  DivAboutUsTextp2,
  DivAboutUsTextTitle2,
  DivMinitextAboutBottom,
  DivMinitextAboutBottom2,
  DivBlocks,
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
        <DivTextAboutusSC>About us</DivTextAboutusSC>
        <DivMinitextAbout>
          Solve foreign language questions for free
        </DivMinitextAbout>
        <DivBlocks>
        <Div1Block>
          <ImgLineAboutUs1 />
          <DivAboutUsText>
            <DivAboutUsTextTitle>Произношение, которое будут хорошо понимать</DivAboutUsTextTitle><DivAboutUsTextp>Пусть носители языка проверят ваше произношение. Получите обратную связь о том, как вы говорите и приобретите более естественное произношение.</DivAboutUsTextp>
          </DivAboutUsText>
        </Div1Block>
        <Div2Block>
          <DivAboutUsText>
          <DivAboutUsTextTitle2>Естественная речь</DivAboutUsTextTitle2><DivAboutUsTextp2>Вы можете узнать выражения, которые используют носители языка, если они будут проверять не только ваши дневники, но и сочинения и деловую переписку!</DivAboutUsTextp2>
         </DivAboutUsText>
           <ImgLineAboutUs2 />
        </Div2Block>
        <Div3Block>
          <ImgLineAboutUs3 />
          <DivAboutUsText>
            <DivAboutUsTextTitle>Выбор правильных слов в соответствующих случаях</DivAboutUsTextTitle><DivAboutUsTextp>Какое выражение мне использовать на работе? А или Б? Узнайте у носителей языка и выбирайте правильные слова для каждой конкретной ситуации.</DivAboutUsTextp>
          </DivAboutUsText>
        </Div3Block>
        </DivBlocks>
        <DivMinitextAboutBottom>Learn practical language skills</DivMinitextAboutBottom>
        <DivMinitextAboutBottom2>Language exchange app</DivMinitextAboutBottom2>
      </DivAboutUsMainCS>

      <DivSignMainCS>
        <DivSignInWrapCS>
          <DivTextSigninSC>Sign in</DivTextSigninSC>
          <DivBlackSignInBlockSC>
            <ImgBlockSignIn />
            <DivSignInTextSC type="text" placeholder="Login" />
            <DivSignInText2SC type="text" placeholder="Password" />
            <DivSigninWordSC>Войти</DivSigninWordSC>
            <DivSignupWordSC>Зарегистрироваться</DivSignupWordSC>
          </DivBlackSignInBlockSC>
        </DivSignInWrapCS>
      </DivSignMainCS>

    </DivWrapMainCS>
  );
};

export default Mainpage;
