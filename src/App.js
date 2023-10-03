

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { PostsPage } from "./pages/PostsPage";
import {MainPage} from "./pages/MainPage";
import { NavBar } from "./components/NavBar"
import { Post } from './components/Post';
import { Layout } from './hoc/Layout';



function App (){
  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
   <Route index element= {<MainPage/>}/> 
   <Route path="/" element= {<Layout/> }/>
   <Route path='posts'element = {<PostsPage/>}/>
   <Route path='posts/:id'element = {<Post/>}/>
  </Routes>
  </BrowserRouter>

  )
   
}

export default App


