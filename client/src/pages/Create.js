import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/AxiosInstance";
import BlogInputSelector from "../components/BlogInputSelector";


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
        // <div className="form-content">
        //     <h2 className="form-title">Create New Blog</h2>
        //     <form>
        //         <div className="form-input-div">
        //         <label htmlFor="">Title: </label>
        //         <input
        //         type="text"
        //         value={title}
        //         onChange={(e)=> setTitle(e.target.value) } />
        //         </div>
        //         <div className="form-input-div">
        //         <label htmlFor="">Body: </label>
        //         <textarea 
        //         cols="30" 
        //         rows="5"
        //         value={body}
        //         onChange={(e)=> setBody(e.target.value) }></textarea>
        //         </div>
        //         <div className="form-input-div">
        //             <label htmlFor="">Author: </label>
        //             <input type="text"
        //             value={author}
        //             onChange={(e)=> setAuthor(e.target.value) } />
        //         </div>
        //         <div className="form-input-div form-btn-div">
        //             <button onClick={addBlog} className="add-blog-btn btn">Add Blog</button>
        //         </div>
        //     </form>
        // </div>

         <div className="row gx-4 gy-2 create">

         <BlogInputSelector />

         <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div className="col-11 col-sm-9 col-lg-6">
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            {/* <!-- Name input--> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label htmlFor="name">Full name</label>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            {/* <!-- Email address input--> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label htmlFor="email">Email address</label>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            {/* <!-- Phone number input--> */}
                            <div className="form-floating mb-3">
                                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label htmlFor="phone">Phone number</label>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            {/* <!-- Message input--> */}
                            <div className="form-floating mb-3">
                                <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required"></textarea>
                                <label htmlFor="message">Message</label>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            {/* <!-- Submit Button--> */}
                            <div className="d-grid"><button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Submit</button></div>
                        </form>
                    </div>
                </div>

         </div>
        

     );
}
 
export default Create;