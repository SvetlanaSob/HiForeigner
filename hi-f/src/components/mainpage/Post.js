import React from 'react';
import { DivBoxQPostP, DivDots } from '../../styles/mainpage.styles';


const Post = (props) => {
    const {
        post
    } = props

    return (
        <>
         <DivBoxQPostP>
            <p>
                {post.text} 
                
                </p>
               <DivDots/>
             </DivBoxQPostP>
          </>
     );
}

export default Post;