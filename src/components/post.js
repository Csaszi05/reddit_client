import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postSlice";
import { fetchCommentById } from "../features/comment";
import { Comment } from "./commentcomp";
import { useNavigate } from "react-router-dom";

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
    
    let navigate = useNavigate();

    const goToPage = (path) => {
        navigate(path); // Navigálj a megadott útvonalra
      };
    
    

    return(
        <div className="postkeret">
            <div className="votekeret">
            <h4>&#8679;</h4>
            <p className="likeszam">{postadatok.ups}</p>
            <h4>&#8681;</h4>
            </div>
    
            <div className="bejegyzes">
                <img className="kicsicon" src="" />
                <p className="communitypost">{"r/"+postadatok.subreddit}</p>
                <h3 className="postcim">{postadatok.title}</h3>
                <p className="postszoveg">{postadatok.selftext}</p>
                <button onClick={()=>{goToPage(postadatok.id)}}>tovább a postra</button>
                {(postadatok.thumbnail) ? (<img src={postadatok.thumbnail} />): postkep=false}
                <p onClick={()=> {dispatch(fetchCommentById(postadatok.id))}}>{"comments: "+ postadatok.num_comments}</p>
                {bennevan ? comments : ""}
            </div>

        </div>);


}