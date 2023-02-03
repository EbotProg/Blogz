import { BiEdit } from 'react-icons/bi';
import React, { useContext } from 'react';
import { BlogContext } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/AxiosInstance';

const BlogDetails = () => {
    const {blogs, loading, error} = useContext(BlogContext);
    let {id} = useParams();
    let navigate = useNavigate();

    function handleDelete(id){

        axios.delete(`/blogs/${id}`)
        .then(()=>{
            console.log('blog deleted');
         navigate('/');
        })
    }

    function editBlog(){
        navigate('/edit/'+id);
    }


    return ( 
        <div className="blog-details">
            { loading && <div className='skeleton-container'>
                <div className="blog-details-header skeleton-text-container">
                      <h2 className="skeleton skeleton-text"></h2>
                      <h2 className="skeleton skeleton-text"></h2>
                      <p className="skeleton skeleton-text"></p>
                   
                </div> 
                <p className="skeleton skeleton-text__body"></p>
                <div className="skeleton skeleton-text"></div>
            </div> }
            { error && <p> {error} </p>}
            {
                
                blogs && blogs.map(blog=>{
                        if(blog.id == id) {
                        return (
                            <>
                 <div className="blog-details-header" key={blog.id}>
                    <div className="blog-identifiers">
                      <h2 className="blog-title">{blog.title}</h2>
                      <p className="blog-author">written by {blog.author}</p>
                    </div>
                <BiEdit className='edit-icon' onClick={editBlog} />
                </div> 
                <p className="blog-body">{blog.body}</p>
                <button onClick={()=>{
                    handleDelete(blog.id);
                }} className="delete-btn btn">Delete Blog</button>
                </>
                        )
                    }
                    })
                }
                
            
            
            
            
            
        </div>
     );
}
 
export default BlogDetails;