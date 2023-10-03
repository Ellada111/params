
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";
export function PostsPage(){
    
  const [posts,setPosts] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then (data=>setPosts (data))
    },[])


    const [loading, setLoading] = useState (false);
    useEffect (()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
        setLoading (true)
         setTimeout(()=>{
            setLoading ()
        }, 1000)
        },[])
   
    return (
        <>
    
      <h1>title</h1>
        <ClipLoader
        loading={loading}
       size={50}
        aria-label="Loading Spinner"
        data-testid="loader"/>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
          <Link to={`/posts/${post.id}`}>Подробнее</Link>
          </li>
        ))}
        
      </ul>
        </>
    )
        }
    
