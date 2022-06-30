import React, { useState } from 'react'
import { DivBlackSignInBlockSC, DivSignInText2SC, DivSignInTextSC, DivSigninWordSC, DivSignInWrapCS, DivSignMainCS, DivSignupWord1SC, DivSignupWordSC, DivTextSigninSC, ImgBlockSignIn } from '../../styles/mainpage.styles';
import { DivBlackSignInBlockPageSC, DivTextSigninPage1SC, DivTextSigninPageSC } from '../../styles/Sign.styles';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const { addNewLog } = props;
 
  const onChange = (status) => (e) => {
    switch (status) {
      case "login":
        return setLogin(e.target.value);
        case "pass":
          return setPass(e.target.value);
          case "repass":
            return setRepass(e.target.value);
      default:
        break;
    }
  };
 let navigate = useNavigate();
 let path = "/mainpage";

  const isLogged=()=>{
navigate(path);
 
   

  };
 
  const onClickButton = () => {
    if (login&&pass&&repass) {
      if(pass===repass){
      const _data = {
        login,
        pass,
        repass,
      };
    
      console.log(_data);
     
      addNewLog(_data);
      
      setLogin("");
      setPass("");
      setRepass("");
   
    }else{
      toast.error("Пароли не совпадают!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    } else {
    toast.error("Вы заполнили не все поля!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
    }
  };
  return (
    <>
    <DivSignMainCS>
    <DivSignInWrapCS>
      <DivTextSigninPage1SC>Sign in</DivTextSigninPage1SC>
      <DivBlackSignInBlockPageSC>
        <ImgBlockSignIn />
        <DivSignInTextSC type="text" placeholder="Login" />
        <DivSignInText2SC type="text" placeholder="Password" />
        <DivSigninWordSC  type="submit"  onClick={isLogged}>Войти</DivSigninWordSC>
        <DivSignupWord1SC to="/signup" >Зарегистрироваться</DivSignupWord1SC>
      </DivBlackSignInBlockPageSC>
    </DivSignInWrapCS>
  </DivSignMainCS>
  </>
  )
}

export default SignIn;
