import React, { useState, useEffect } from "react";
import {
  DivBottomSearchBlockSC,
  DivRecentQMainCS,
  DivLeftSearchBlockSC,
  DivRightSearchBlockSC,
  DivSearchBlocksWrapCS,
  DivSearchMainCS,
  DivTextLanguageSC,
  DivTextSearchSC,
  DivSelectTopSC,
  DivSelectBottomSC,
  DivOptionLangs,
  DivSearchSC,
  DivRecQBlockCS,
  DivRecQText,
  DivQBlock,
  DivButtonsBlockSC,
  DivButtonSC,
  DivWrapMainLCS,
  UlSearch,
  LiSearch,
  ALinkQ,
} from "../../styles/mainpage.styles";
import Post from "./Post";
import BoxCreatePost from "./BoxCreatePost";
import arrayPosts from "./arrayPosts";
import { useNavigate } from "react-router-dom";
const Logged = (props) => {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    getPosts(arrayPosts);
  }, []);

  const addNewPost = (data) => {
    const tempArray = posts;
    tempArray.unshift(data);
    getPosts([...tempArray]);
  };

  const [value, setValue] = useState("");
  const filteredQs = posts.filter((word) => {
    return word.text.toLowerCase().includes(value.toLowerCase());
   
  });
  

  const gettingID = (id) => {
    const theId = id;
    console.log(theId);
  };

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

  let forum ="/forum"
  const redir = (prop) => {
    const id=prop;
    console.log(id);
    navigate(forum);
  };
  const listContent = [
    {
      block: (
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
      ),
      search: (
        <>
          <DivSearchSC
            type="text"
            onChange={(event) => setValue(event.target.value)}
          ></DivSearchSC>{" "}
          <UlSearch isActive={value !== ""}>
            {value
              ? filteredQs.map((item, i) => {
                  return <LiSearch onClick={redir}>{item.text}</LiSearch>;
                })
              : null}
          </UlSearch>
          <DivTextSearchSC>SEARCH</DivTextSearchSC>
        </>
      ),
    },
    {
      block: (
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
      ),
      search: (
        <>
          <BoxCreatePost addNewPost={addNewPost} />
        </>
      ),
    },
  ];

  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };

  return (
    <DivWrapMainLCS>
      <DivSearchMainCS>
        <DivSearchBlocksWrapCS>
          <DivLeftSearchBlockSC>
            {listContent[indexSelectedButton].search}
          </DivLeftSearchBlockSC>
          <DivButtonsBlockSC>
            <DivButtonSC
              isActive={indexSelectedButton === 0}
              onClick={onClickTab(0)}
            ></DivButtonSC>
            <DivButtonSC
              isActive={indexSelectedButton === 1}
              onClick={onClickTab(1)}
            ></DivButtonSC>
          </DivButtonsBlockSC>
          <DivTextLanguageSC>LANGUAGE</DivTextLanguageSC>
          {listContent[indexSelectedButton].block}
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
    </DivWrapMainLCS>
  );
};

export default Logged;
