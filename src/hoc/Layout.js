
import { Outlet } from "react-router-dom";
import { Post } from "../components/Post";
import { useNavigate } from "react-router-dom";

export function Layout (){
    const navigate= useNavigate ()
    

    function goToBack ()  {
        navigate(-1);
      };
    


    return (
        <>
        
         <button onClick={goToBack}>Назад</button>
           
          <Post/>
         <Outlet/>
       </>
    )
    }