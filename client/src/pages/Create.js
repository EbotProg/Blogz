import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/AxiosInstance";
// import BlogInputSelector from "../components/BlogInputSelector";
import {AiOutlinePlus} from 'react-icons/ai';
import { BsCloudUpload } from 'react-icons/bs';
import Category  from '../components/Category';
import MainStory  from '../components/MainStory';
import SubTitle  from '../components/SubTitle';
import MainTitle  from '../components/MainTitle';
import PhotoUpload  from '../components/PhotoUpload';
import Paragraph from '../components/Paragraph';


const Create = () => {

    //array to store form elements
    let [formArray, setFormArray] = useState([<MainTitle />,<Category />, <MainStory />])
    let [formEltNames, setFormEltNames] = useState(['main-title', 'category','main-story']);
    let obj = {
        indexOfMainStory: null
    }


    function addAboveMainStory(name, element){
        let names = [];
        let elements = [];
        elements = [...formArray];
        names = [...formEltNames];
        elements.splice(obj.indexOfMainStory, 0, element);
        names.splice(obj.indexOfMainStory, 0, name);
        setFormArray(elements)
        setFormEltNames(names);
    }

    function addEltBelow(name, element){
        let names = [];
        let elements = [];
        elements = [...formArray];
        names = [...formEltNames];
        elements.push(element);
        names.push(name);
        setFormArray(elements)
        setFormEltNames(names);
    }
    // function displayFirstFormItems(formElement, index, arr){
    //     console.log(formElement.formElt);
        
            
    // }
   

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
        

         <div className="row gx-4 gy-2 create">



         <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-11 col-sm-9 col-lg-6">
                    <h2 className="form-title">Create New Blog</h2>
                        <form id="contactForm" >
                            
                            {/* <div className="form-floating mb-3">
                                <input 
                                className="form-control" type="text" placeholder="Enter your name..." />
                                <label >Main Title</label>
                                
                            </div>

                            <select class="form-select mb-3" aria-label="Default select example">
                             <option selected>Category</option>
                             <option value="1">Agriculture</option>
                             <option value="2">Science</option>
                             <option value="3">Education</option>
                             <option value="3">Three</option>
                             <option value="3">Three</option>
                           </select> */}

                           {formArray.map((item, index, arr)=>{// always display first two elts of array
                            if(index <= 1){
                                return item;
                            }
                            
                           })}
                          
                          {formArray.map((item, index, arr)=>{//always display elts from the index after index 1 as long as it is not the main story elt
                            
                           

                            {formEltNames.map((item, index, arr)=>{
                            if(item == 'main-story'){
                                obj.indexOfMainStory = index;
                            }
                            })}

                            if(index > 1 && index < obj.indexOfMainStory){
                                return item;
                            }
                            
                           })}

{/*                            
                           <div className="photo-upload-btn d-flex flex-column align-items-center justify-content-center mb-3">
                           <BsCloudUpload className="xxl-icon" />
                           <p>Browse to upload photo</p>
                           <input type="file" className="d-none" />
                           </div> */}
                           


                           <div className="d-grid mb-2"><button type='button' className='input-selector col-5 col-sm-4' onClick={()=>{addAboveMainStory('Sub-title', <SubTitle />)}} ><AiOutlinePlus/>Sub-title</button></div>
                           <div className="d-grid mb-2"><button type='button' className='input-selector col-5 col-sm-4' onClick={()=>{addAboveMainStory('photo', <PhotoUpload />)}}><AiOutlinePlus/>Photo</button></div>

                            
                            <div className="form-floating mb-3">
                                <textarea className="form-control" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} ></textarea>
                                <label>Main Story</label>
                            
                            </div>

                            {formArray.map((item, index, arr)=>{//always display elts from the index after index 1 as long as it is not the main story elt
                            
                           

                            {formEltNames.map((item, index, arr)=>{
                            if(item == 'main-story'){
                                obj.indexOfMainStory = index;
                            }
                            })}

                            if(index > 1 && index > obj.indexOfMainStory){
                                return item;
                            }
                            
                           })}
                            
                            <div className="d-grid mb-2"><button type='button' className='input-selector col-5 col-sm-4' onClick={()=>{addEltBelow('Sub-title', <SubTitle /> )}}><AiOutlinePlus/>Sub-title</button></div>
                           <div className="d-grid mb-2"><button type='button' className='input-selector col-5 col-sm-4' onClick={()=>{addEltBelow('photo', <PhotoUpload /> )}}><AiOutlinePlus/>Photo</button></div>
                           <div className="d-grid mb-2"><button type='button' className='input-selector col-5 col-sm-4' onClick={()=>{addEltBelow('paragraph', <Paragraph /> )}}><AiOutlinePlus/>Paragraph</button></div>

                            <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>

         </div>
        

     );
}
 
export default Create;