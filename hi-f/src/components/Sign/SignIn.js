import React from 'react'
import { DivBlackSignInBlockSC, DivSignInText2SC, DivSignInTextSC, DivSigninWordSC, DivSignInWrapCS, DivSignMainCS, DivSignupWordSC, DivTextSigninSC, ImgBlockSignIn } from '../../styles/mainpage.styles';
import { DivBlackSignInBlockPageSC, DivTextSigninPage1SC, DivTextSigninPageSC } from '../../styles/Sign.styles';


const SignIn = (props) => {
  return (
    <>
    <DivSignMainCS>
    <DivSignInWrapCS>
      <DivTextSigninPage1SC>Sign in</DivTextSigninPage1SC>
      <DivBlackSignInBlockPageSC>
        <ImgBlockSignIn />
        <DivSignInTextSC type="text" placeholder="Login" />
        <DivSignInText2SC type="text" placeholder="Password" />
        <DivSigninWordSC to="/mainpage">Войти</DivSigninWordSC>
        <DivSignupWordSC to="/signup">Зарегистрироваться</DivSignupWordSC>
      </DivBlackSignInBlockPageSC>
    </DivSignInWrapCS>
  </DivSignMainCS>
  </>
  )
}

export default SignIn;