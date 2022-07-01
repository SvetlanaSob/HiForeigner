import React, { useState, useEffect } from "react";
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
  DivQBlock,
  UlSearch,
  LiSearch,
} from "../../styles/mainpage.styles";
import Post from "./Post";
import arrayPosts from "./arrayPosts";
import { useNavigate } from "react-router-dom";

const Mainpage = (props) => {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    getPosts(arrayPosts);
  }, []);

  const [value, setValue] = useState("");
  const filteredQs = posts.filter((word) => {
    return word.text.toLowerCase().includes(value.toLowerCase());
  });

  //   const getID = (id)=>{
  // console.log(id)

  //   };

  const [speak, setS] = useState("");
  const [learn, setL] = useState("");

  const onChange = (status) => (e) => {
    switch (status) {
      case "speak":
        return setS(e.target.value);
      default:
        break;
    }
  };
  const onChange2 = (status) => (e) => {
    switch (status) {
      case "learn":
        return setL(e.target.value);
      default:
        break;
    }
  };

  const onClickButton = () => {
    const _op = {
      learn,
    };
    console.log(_op);
  };
  const onClickButton2 = () => {
    const _op = {
      speak,
    };
    console.log(_op);
  };
  let navigate = useNavigate();
  let path = "/mainpage";
  let forum ="/forum"
  let sign="/signup"
  const isLogged = () => {
    navigate(path);
  };
  const redir = (prop) => {
    const id=prop;
    console.log(id);
    navigate(forum);
  };
  const toSign =(prop)=>{
    const id=prop;
    console.log(id);
    navigate(sign);
  };
  
  return (
    <DivWrapMainCS>
      <DivSearchMainCS>
        <DivSearchBlocksWrapCS>
          <DivLeftSearchBlockSC>
            <DivSearchSC
              type="text"
              onChange={(event) => setValue(event.target.value)}
            ></DivSearchSC>{" "}
            <UlSearch isActive={value !== ""}>
              {value
                ? filteredQs.map((item, i) => {
                    return <LiSearch key={i} onClick={redir}>{item.text} </LiSearch>;
                  })
                : null}
            </UlSearch>
            <DivTextSearchSC>SEARCH</DivTextSearchSC>
          </DivLeftSearchBlockSC>
          <DivTextLanguageSC>LANGUAGE</DivTextLanguageSC>
          <DivRightSearchBlockSC>
            <DivSelectTopSC
              onChange={(e) => {
                onClickButton(e.target.value);
              }}
            >
              <DivOptionLangs>Изучаю</DivOptionLangs>
              <DivOptionLangs
                type="submit"
                onClick={onChange2("learn")}
                value="Английский"
              >
                Русский
              </DivOptionLangs>
              <DivOptionLangs
                type="submit"
                onClick={onChange2("learn")}
                value="Русский"
              >
                Английский
              </DivOptionLangs>
            </DivSelectTopSC>
            <DivSelectBottomSC
              onChange={(e) => {
                onClickButton2(e.target.value);
              }}
            >
              <DivOptionLangs>Владею</DivOptionLangs>
              <DivOptionLangs
                type="submit"
                onClick={onChange("speak")}
                value="Английский"
              >
                Русский
              </DivOptionLangs>
              <DivOptionLangs
                type="submit"
                onClick={onChange("speak")}
                value="Русский"
              >
                Английский
              </DivOptionLangs>
            </DivSelectBottomSC>
          </DivRightSearchBlockSC>
          <DivBottomSearchBlockSC />
        </DivSearchBlocksWrapCS>
      </DivSearchMainCS>

      <DivRecentQMainCS>
        <DivRecQBlockCS>
          <DivRecQText>Последние вопросы</DivRecQText>
        </DivRecQBlockCS>
        <DivQBlock>
          {arrayPosts.slice(0, 3).map((item, i) => {
            return <buttonSC onClick={redir} > <Post post={item} key={i}></Post></buttonSC>;
          })}
        </DivQBlock>
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
              <DivAboutUsTextTitle>
                Произношение, которое будут хорошо понимать
              </DivAboutUsTextTitle>
              <DivAboutUsTextp>
                Пусть носители языка проверят ваше произношение. Получите
                обратную связь о том, как вы говорите и приобретите более
                естественное произношение.
              </DivAboutUsTextp>
            </DivAboutUsText>
          </Div1Block>
          <Div2Block>
            <DivAboutUsText>
              <DivAboutUsTextTitle2>Естественная речь</DivAboutUsTextTitle2>
              <DivAboutUsTextp2>
                Вы можете узнать выражения, которые используют носители языка,
                если они будут проверять не только ваши дневники, но и сочинения
                и деловую переписку!
              </DivAboutUsTextp2>
            </DivAboutUsText>
            <ImgLineAboutUs2 />
          </Div2Block>
          <Div3Block>
            <ImgLineAboutUs3 />
            <DivAboutUsText>
              <DivAboutUsTextTitle>
                Выбор правильных слов в соответствующих случаях
              </DivAboutUsTextTitle>
              <DivAboutUsTextp>
                Какое выражение мне использовать на работе? А или Б? Узнайте у
                носителей языка и выбирайте правильные слова для каждой
                конкретной ситуации.
              </DivAboutUsTextp>
            </DivAboutUsText>
          </Div3Block>
        </DivBlocks>
        <DivMinitextAboutBottom>
          Learn practical language skills
        </DivMinitextAboutBottom>
        <DivMinitextAboutBottom2>Language exchange app</DivMinitextAboutBottom2>
      </DivAboutUsMainCS>

      <DivSignMainCS>
        <DivSignInWrapCS>
          <DivTextSigninSC>Sign in</DivTextSigninSC>
          <DivBlackSignInBlockSC>
            <ImgBlockSignIn />
            <DivSignInTextSC type="text" placeholder="Login" />
            <DivSignInText2SC type="text" placeholder="Password" />
            <DivSigninWordSC onClick={isLogged}>Войти</DivSigninWordSC>
            <DivSignupWordSC onClick={toSign}>Зарегистрироваться</DivSignupWordSC>
          </DivBlackSignInBlockSC>
        </DivSignInWrapCS>
      </DivSignMainCS>
    </DivWrapMainCS>
  );
};

export default Mainpage;
