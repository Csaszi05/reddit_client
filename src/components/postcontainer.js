import { Post } from "./post";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export function PostContainer(){
const postdata = useSelector((state)=> state.posts);
let postok;
if(postdata.isloading){
    return(<h1>loading.....</h1>)
}
else if(postdata.iserror){
    return(<h1>Errrrrrorr</h1>)
}
else if(postdata.posts){
    postok = postdata.posts.map((post)=> <Post postadatok={post.data} key={post.data.id} />);
}


return(
    <div className="posztkeret">
        {postok}
    </div>
)
}