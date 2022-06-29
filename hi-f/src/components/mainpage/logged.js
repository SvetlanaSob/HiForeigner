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
} from "../../styles/mainpage.styles";
import Post from "./Post";
import BoxCreatePost from "./BoxCreatePost";
import arrayPosts from "./arrayPosts";


const Logged = (props) => {
  const [posts, getPosts] = useState([])
  useEffect(() => {
    getPosts(arrayPosts)
}, [])


const addNewPost = (data) => {
  const tempArray = posts
  tempArray.push(data)
  getPosts([...tempArray])

}
  

  



  const listContent = [
    {
      block: (
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
      ),
      search: (
        <>
          <DivSearchSC type="text"></DivSearchSC>
          <DivTextSearchSC>SEARCH</DivTextSearchSC>
        </>
      ),
    },
    {
      block: (
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
      ),
      search: <>
<BoxCreatePost
                    addNewPost={addNewPost}
                />
      </>,
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
            >
            </DivButtonSC>
            <DivButtonSC
              isActive={indexSelectedButton === 1}
              onClick={onClickTab(1)}
            >
            </DivButtonSC>
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
        {
                    posts.map((item, i) => {
                        return (
                            <Post
                                post={item}
                                key={i}
                            ></Post>
                        )
                    })
                    
                }
        </DivQBlock>
      </DivRecentQMainCS>
    </DivWrapMainLCS>
  );
};

export default Logged;