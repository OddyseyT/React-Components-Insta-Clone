// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import { createPortal } from "react-dom";

const CommentSection = props => {
  console.log(props)
  // Add state for the comments
const [ data, setData ] = useState(props.comments);


 
  return (
   <div>
    {data.map((comments, index) => {
          return (
            <Comment comment = {comments}
           
            />
          )})}
      
				
      <CommentInput input = {CommentInput}/>
      </div>
      )}

export default CommentSection;
