import React from 'react';



const RecQ = (props) => {
    const {post} = props

    return (
       <> 
       {/* <стиль блока> */}
            {post.name ? <h4>
                {
                    post.name
                }
            </h4> : null}
            {
                post.namePost ? <h5>{post.namePost}</h5> : null
            }
            <p>
                {post.text}
            </p>
           {/* </стиль> */}
      </>
    );
}

export default RecQ;