import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
// import EditBlog from './pages/EditBlog';
import Login from './pages/Login';
import AuthNavbar from './pages/AuthNavbar';
import React, { useEffect } from 'react';
import useAxios from "./api/UseAxios";
import Registration from './pages/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Dashboard from './pages/Dashboard';
import Comment from './pages/Comment';

//axios interceptor example
// import axios from './api/AxiosInstance';

// axios.interceptors.request.use((request)=>{
//   request.headers.Authorization = 'Jwt_Authorization_Token';

//   return request;
// })

// axios.interceptors.response.use((response)=>{
//   console.log(response);
//   return response;
// })



export const BlogContext = React.createContext();




 function App() {

  const {data:blogs, loading, error} = useAxios('/blogs');
  
  

  return (
    <div className="App">
    <BlogContext.Provider value={{blogs, loading, error}}>
   
   
    
      <Routes>
        
       <Route path="/">
           <Route path="main/*" element={<MainApplication />}/>
           <Route path="auth/*" element={<RegLog />}/>
        </Route>
       
      </Routes>
      
      
    
    </BlogContext.Provider>
                    
    </div>
  );
}

function MainApplication(){
  return(
    <>
    <Navbar>
      <Routes>
           <Route index element={<Home />} />
           <Route path="/dashboard/*" element={<BlogDashboard />} />
           <Route path="/comment" element={<Comment />} />
           <Route path="/create" element={<Create />} />
      </Routes>
    </Navbar>
    </>
  );
}

function RegLog(){
  return(
    <>
    <AuthNavbar>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      </Routes>
    </AuthNavbar>
    </>
  )
}


function BlogDashboard(){
  return(
    <>
    
      <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    
    </>
  )
}


export default App;
