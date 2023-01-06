import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import EditBlog from './pages/EditBlog';
import Login from './pages/Login';
import React, { useEffect } from 'react';
import useAxios from "./api/UseAxios";
import Registration from './pages/Registration';


//axios interceptor example
import axios from './api/AxiosInstance';

axios.interceptors.request.use((request)=>{
  request.headers.Authorization = 'Jwt_Authorization_Token';

  return request;
})

axios.interceptors.response.use((response)=>{
  console.log(response);
  return response;
})



export const BlogContext = React.createContext();

//  //function to reverse array of blogs
//  let blogs = [];
//  async function reverseBlogArr (data) {
    
//     for(let i=0; i < await data.length; i++){
//       blogs.push(await data.pop());
//     }
//   }


 function App() {

  const {data:blogs, loading, error} = useAxios('/blogs');
  
  

  return (
    <div className="App">
    <BlogContext.Provider value={{blogs, loading, error}}>
   
   
    <Navbar />
      <Routes>
        
       <Route path="/">
           
           <Route index element={<Home />} />
           <Route path="create" element={<Create />} />
           <Route path="blogs/:id" element={<BlogDetails />} />
           <Route path="edit/:id" element={<EditBlog />} />
           <Route path="login" element={<Login />} />
           <Route path="registration" element={<Registration />} />
       </Route>
       
      </Routes>
      

    
    </BlogContext.Provider>
                    
    </div>
  );
}

export default App;
