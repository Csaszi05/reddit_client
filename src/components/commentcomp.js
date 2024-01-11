import React from "react";
import comment from "../features/comment";

export function Comment({commentadatok}){
    
    return(
        <div className="commentcontainer">
            <h4>{commentadatok.author}</h4>
        
            <p>{commentadatok.body}</p>
        </div>
    );
}