import React from "react";
import { useParams } from "react-router-dom";

export function SinglePost(){
    const { id } = useParams();
    
    return(
    <h2>{id}</h2>
    );

}