import React, { useState, useEffect } from "react";
import { DivBoxQPostP2, DivBoxQPostP4, DivQRWrap, DivQRWrap2, DivQRWrap5, DivRecentQMain2CS } from "../../styles/forum.styles";
import Q from "./q";
import A from "./a";
import arrayPostsA from "../mainpage/arrayPostsA";
import arrayPosts from "../mainpage/arrayPosts";
import BoxCreatePostA from "../mainpage/BoxCreatePostA";



const ForumL = (props) => {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    
    getPosts(arrayPosts)
  }, []);

  const [postsA, getPostsA] = useState([]);
  useEffect(() => {
    getPostsA(arrayPostsA);
  }, []);
 
  const addNewPostA = (data) => {
    const tempArray = postsA;
    tempArray.push(data);
    getPostsA([...tempArray]);
  }; 

  return (
    <DivRecentQMain2CS>
      
      <DivQRWrap>

      {arrayPosts.slice(0, 1).map((item, i) => {
        return <Q post={item} key={i}></Q>;
      })}
 <DivQRWrap2>

{arrayPostsA.map((item, i) => {
  return <A post={item} key={i}></A>;
})}

</DivQRWrap2>
<DivQRWrap5>
<DivBoxQPostP2>
          <BoxCreatePostA addNewPostA={addNewPostA} />
      </DivBoxQPostP2> 
      </DivQRWrap5>
      </DivQRWrap>
    </DivRecentQMain2CS>
  );
};

export default ForumL;
