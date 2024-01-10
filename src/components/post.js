import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postSlice";
import { fetchCommentById } from "../features/comment";
import { Comment } from "./commentcomp";

export function Post({postadatok}){
    
    let postkep;
    const dispatch = useDispatch();

    const commentstate = useSelector((state) => {return(state.comment)});
    
    
    
    
    const commentsSelect = commentstate.comments;
    const postid = commentstate.commentds.id;
    const comments = commentsSelect.map(com => {return (<Comment commentadatok={com.data} key={com.data.id} />)})
    
    let bennevan = false;
    if(postid===postadatok.id){
        bennevan = true;
    }
    else{bennevan = false;}
    
    

    return(
        <div className="postkeret">
            <div className="votekeret">
            
            <p className="likeszam">{postadatok.ups}</p>
            
            </div>
    
            <div className="bejegyzes">
                <img className="kicsicon" src="" />
                <p className="communitypost">{"r/"+postadatok.subreddit}</p>
                <h3 className="postcim">{postadatok.title}</h3>
                <p className="postszoveg">{postadatok.selftext}</p>
                {(postadatok.thumbnail) ? (<img src={postadatok.thumbnail} />): postkep=false}
                <p onClick={()=> {dispatch(fetchCommentById(postadatok.id))}}>{"comments: "+ postadatok.num_comments}</p>
                {bennevan ? comments : ""}
            </div>

        </div>);


}