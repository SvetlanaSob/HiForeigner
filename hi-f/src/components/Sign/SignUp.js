import React, { useState } from 'react'
import { DivBlackSignInBlockSC, DivOptionLangs, DivOptionLangs2, DivSelectBottom2SC, DivSelectBottomSC, DivSelectTop2SC, DivSelectTopSC, DivSignInText12SC, DivSignInText22SC, DivSignInText2SC, DivSignInText3SC, DivSignInTextSC, DivSigninWordSC, DivSignInWrapCS, DivSignMainCS, DivSignupWordSC, DivTextSigninSC, ImgBlockSignIn } from '../../styles/mainpage.styles';
import { DivBlackSignInBlockPageSC, DivTextSigninPageSC } from '../../styles/Sign.styles';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
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
 let path = "/signin";
  
  const onClickButton = () => {
    if (login&&pass&&repass) {
      if(pass===repass){
      const _data = {
        login,
        pass,
        repass,
      };
    
      console.log(_data);
      navigate(path);
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
      <DivTextSigninPageSC>Sign up</DivTextSigninPageSC> <ToastContainer />
      <DivBlackSignInBlockPageSC>
        <ImgBlockSignIn />
        <DivSignInText12SC type="text" placeholder="Login"   onChange={onChange("login")} value={login}/>
        <DivSignInText22SC type="text" placeholder="Password"   onChange={onChange("pass")} value={pass}/>
        <DivSignInText3SC type="text" placeholder="Repeat password"   onChange={onChange("repass")} value={repass}/>
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
        <DivSignupWordSC  type="submit"  onClick={onClickButton}>Зарегистрироваться</DivSignupWordSC>
       
      </DivBlackSignInBlockPageSC>
    </DivSignInWrapCS>
  </DivSignMainCS>
  </>
  )
}

export default SignUp;