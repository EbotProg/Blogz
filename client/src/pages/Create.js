import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/AxiosInstance";


const Create = () => {


    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    let [author, setAuthor] = useState('');
    let navigate = useNavigate();

    function addBlog(e) {
        e.preventDefault();
        axios.post('/blogs', {title, body, author})
        .then(()=>{
            console.log('blog added');
            navigate('/');
        })
    }


    return ( 
        <div className="form-content">
            <h2 className="form-title">Create New Blog</h2>
            <form>
                <div className="form-input-div">
                <label htmlFor="">Title: </label>
                <input
                type="text"
                value={title}
                onChange={(e)=> setTitle(e.target.value) } />
                </div>
                <div className="form-input-div">
                <label htmlFor="">Body: </label>
                <textarea 
                cols="30" 
                rows="5"
                value={body}
                onChange={(e)=> setBody(e.target.value) }></textarea>
                </div>
                <div className="form-input-div">
                    <label htmlFor="">Author: </label>
                    <input type="text"
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value) } />
                </div>
                <div className="form-input-div form-btn-div">
                    <button onClick={addBlog} className="add-blog-btn btn">Add Blog</button>
                </div>
            </form>
        </div>
     );
}
 
export default Create;