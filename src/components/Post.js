import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"



export function Post (){
    const [post,setPost] =useState ({})
const {id} =useParams()
useEffect (()=>{
    fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then (response=>response.json())
    .then(data=> setPost (data))
},[id])

    return (
        <>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        </>
    )
}