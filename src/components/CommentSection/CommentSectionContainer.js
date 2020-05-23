// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [ data, setData ] = useState(Comment)
 
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.data.map(data => (
      <div key={data.username}>
       <Comment />  
				
      <CommentInput />
      
      </div>))}
      </div>
  )
    }
export default CommentSection;
