// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  console.log(props)
  const [count, setCount] = useState(props.post.likes);
  // set up state for the likes
  const [clicks, setClicks] = useState(false);
  const clicked = () =>{
  if (clicks) {
   setClicks(false);
   setCount(count-1);
  }
  else {
    setClicks(true);
    setCount(count+1);
  }
}


  
  

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div className="counter">
      <LikeSection
       clicks={count}
       setCount={setCount}
       clicked={clicked}
    />
      </div>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
