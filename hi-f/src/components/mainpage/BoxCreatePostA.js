import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ButtonQSC,
  ButtonQSC2,
  DivBoxCreateQSC,
  DivBoxCreateQSC2,
  TextAreaCreateQSC,
  TextAreaCreateQSC2,
} from "../../styles/mainpage.styles";

const BoxCreatePostA = (props) => {
  const [text, setText] = useState("");
  const { addNewPostA } = props;

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
      addNewPostA(_data);
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
    <DivBoxCreateQSC2>
      <TextAreaCreateQSC2
        name=""
        id=""
        cols="30"
        rows="1"
        placeholder={"Ответить"}
        onChange={onChange("text")}
        value={text}
      ></TextAreaCreateQSC2>
      <ButtonQSC2 type="submit" onClick={onClickButton}>
        Опубликовать
      </ButtonQSC2>
      <ToastContainer />
    </DivBoxCreateQSC2>
  );
};

export default BoxCreatePostA;
