import React, { useState, useEffect } from 'react'
import { DivRecentQMain2CS } from '../../styles/forum.styles';
import Post from "../mainpage/Post";
import arrayPosts from "../mainpage/arrayPosts";
import { DivCreditSC, DivFooterShadowCS, DivFooterWrapCS, DivLinksSC, LinkFooterSC } from '../../styles/footer.styles';
import { DivSearchMainCS, DivWrapMainCS } from '../../styles/mainpage.styles';


const Forum = (props) => {
  const [posts, getPosts] = useState([]);
  useEffect(() => {
    getPosts(arrayPosts);
  }, []);
 
  return (
    <DivRecentQMain2CS>
      {arrayPosts.slice(0, 3).map((item, i) => {
            return <Post post={item} key={i} ></Post>;
          })}
      
     
    </DivRecentQMain2CS>

     

    )
  
}

export default Forum;