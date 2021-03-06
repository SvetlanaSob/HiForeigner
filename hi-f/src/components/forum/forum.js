import React, { useState, useEffect } from "react";
import { DivQRWrap, DivQRWrap2, DivRecentQMain2CS } from "../../styles/forum.styles";
import Q from "./q";
import A from "./a";
import arrayPostsA from "../mainpage/arrayPostsA";
import arrayPosts from "../mainpage/arrayPosts";


const Forum = (props) => {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    getPosts(arrayPostsA);
    getPosts(arrayPosts)
  }, []);

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
      </DivQRWrap>
    </DivRecentQMain2CS>
  );
};

export default Forum;
