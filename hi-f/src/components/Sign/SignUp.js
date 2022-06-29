import React from 'react'
import { DivBlackSignInBlockSC, DivOptionLangs, DivOptionLangs2, DivSelectBottom2SC, DivSelectBottomSC, DivSelectTop2SC, DivSelectTopSC, DivSignInText12SC, DivSignInText22SC, DivSignInText2SC, DivSignInText3SC, DivSignInTextSC, DivSigninWordSC, DivSignInWrapCS, DivSignMainCS, DivSignupWordSC, DivTextSigninSC, ImgBlockSignIn } from '../../styles/mainpage.styles';
import { DivBlackSignInBlockPageSC, DivTextSigninPageSC } from '../../styles/Sign.styles';


const SignUp = (props) => {
  return (
    <>
    <DivSignMainCS>
    <DivSignInWrapCS>
      <DivTextSigninPageSC>Sign up</DivTextSigninPageSC>
      <DivBlackSignInBlockPageSC>
        <ImgBlockSignIn />
        <DivSignInText12SC type="text" placeholder="Login" />
        <DivSignInText22SC type="text" placeholder="Password" />
        <DivSignInText3SC type="text" placeholder="Repeat password" />
        <DivSelectTop2SC>
            <DivOptionLangs2>Изучаю</DivOptionLangs2>
            <DivOptionLangs2 value="1">Русский</DivOptionLangs2>
            <DivOptionLangs2 value="2">Английский</DivOptionLangs2>
          </DivSelectTop2SC>
          <DivSelectBottom2SC>
            <DivOptionLangs2>Владею</DivOptionLangs2>
            <DivOptionLangs2 value="1">Русский</DivOptionLangs2>
            <DivOptionLangs2 value="2">Английский</DivOptionLangs2>
          </DivSelectBottom2SC>
        <DivSignupWordSC to="/signin">Зарегистрироваться</DivSignupWordSC>
      </DivBlackSignInBlockPageSC>
    </DivSignInWrapCS>
  </DivSignMainCS>
  </>
  )
}

export default SignUp;