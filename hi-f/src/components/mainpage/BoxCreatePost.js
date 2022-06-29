import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonQSC, DivBoxCreateQSC, TextAreaCreateQSC } from "../../styles/mainpage.styles";


const BoxCreatePost = (props) => {
  const [text, setText] = useState("");
  const { addNewPost } = props;

  const onChange = (status) => (e) => {
    switch (status) {
      case "text":
        return setText(e.target.value);
      default:
        break;
    }
  };

  const onClickButton = () => {
    if (text) {
      const _data = {
        text,
      };
      console.log(_data);
      addNewPost(_data);
      setText("");
    } else {
    toast.error("Вы не можете отправить пустой вопрос!", {
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
    <DivBoxCreateQSC>
      <TextAreaCreateQSC
        name=""
        id=""
        cols="30"
        rows="1"
        placeholder={"Какой у вас вопрос?"}
        onChange={onChange("text")}
        value={text}
      ></TextAreaCreateQSC>
      <ButtonQSC type="submit" onClick={onClickButton}>
        Спросить!
      </ButtonQSC>
      <ToastContainer />
    </DivBoxCreateQSC>
  );
};

export default BoxCreatePost;
