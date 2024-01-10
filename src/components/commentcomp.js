import React from "react";
import comment from "../features/comment";

export function Comment({commentadatok}){
    
    return(
        <div className="commentcontainer">
            <h2>{commentadatok.author}</h2>
        
            <p>{commentadatok.body}</p>
        </div>
    );
}