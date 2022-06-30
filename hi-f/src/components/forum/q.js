import React from "react";
import { DivBoxQPostP2, DivDots2, DivDots3, DivMan } from "../../styles/forum.styles";
import { DivBoxQPostP, DivDots } from "../../styles/mainpage.styles";

const Q = (props) => {
  const { post } = props;

  return (
    <>
      <DivBoxQPostP2>
        <DivMan/>
        <DivDots2 />
        <p>
          {post.text}
          {post.speak}
        </p>
        
        <DivDots3 />
      </DivBoxQPostP2>
    </>
  );
};

export default Q;
