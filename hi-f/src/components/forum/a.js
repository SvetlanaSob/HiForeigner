import React from "react";
import { DivBoxQPostP2, DivBoxQPostP3, DivDots2, DivDots3, DivMan, DivMan2 } from "../../styles/forum.styles";
import { DivBoxQPostP, DivDots } from "../../styles/mainpage.styles";

const A = (props) => {
  const { post } = props;

  return (
    <>
      <DivBoxQPostP3>
        <DivMan2/>
   
        <p>
          {post.text}
          {post.speak}
        </p>
        
       
      </DivBoxQPostP3>
    </>
  );
};

export default A;
