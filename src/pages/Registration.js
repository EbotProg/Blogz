import { useState, useEffect, useRef } from "react";
import useAxios from "../api/UseAxios";
import axios from "../api/AxiosInstance";
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const url = '/users';
    const {data:users, loading, error} = useAxios(url);

    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [errMsg, setErrMsg] = useState('');
    let validInput = null;
     let errInput = useRef(0);
// this useeffect is here so that when the component reloads, the first input field will be focused
let firstInput = useRef(0);

useEffect(()=>{
    firstInput.current.focus();
}, [])

//////////////////////

//useeffect for changing error messages
useEffect(()=>{
    setErrMsg('');
}, [email, username, password])

//arrange code from line 30 to 56
   async function handleSubmit(){
        console.log(email, username, password);
        console.log('validInput1', validInput);
        //authentication
         
        let emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log('email is valid',emailIsValid.test(email))
        console.log('users', users)
        
//do this if users array is empty
if(users.length === 0){
    
    if(email.length === 0 || !(emailIsValid.test(email))){
    
        setErrMsg('Incorrect email');
    return;     
    }if(username.length < 4 ){
    
        setErrMsg('Incorrect username');
    return;
    }if(password.length < 5){
    
        setErrMsg('Incorrect password');
    return;
    }
    else{
        validInput = true;
    }
}
 else if(users.length >= 1){


    await users.forEach( user => {

        if(user.email === email || !(emailIsValid.test(email)) || email.length == 0){//for email
               
            setErrMsg('Incorrect email');
            validInput = false;
            console.log('validInput2', validInput, user.id);
            return;

       }if(user.username === username || username.length < 4){

           setErrMsg('Incorrect username');
           validInput = false;
           console.log('validInput3', validInput, user.id);
           return;

       }if(user.password === password || password.length < 5){

           setErrMsg('password is either weak or incorrect');
           validInput = false;
           console.log('validInput4', validInput, user.id);
           return;

       }
       else{
               validInput = true;                  
               console.log('validInput5', validInput, user.id);
           }
       });
}

if(validInput == true){
            axios.post(url, {email, username, password})
            .then(()=>{
             console.log('Registered successfully'); 
             navigate('/login');
            })
        }
        
    }

    return ( 
        <div className="form-content">
            <h2 className="form-title">Registration</h2>
            <form>
                <p ref={errInput} className="error-msg">{errMsg}</p>
            <div className="form-input-div">
                <label htmlFor="">Email: </label>
                <input
                ref={firstInput}
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                </div>
                <div className="form-input-div">
                <label htmlFor="">Username: </label>
                <input
                type="text"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                />
                </div>
              
                <div className="form-input-div">
                    <label htmlFor="">Password: </label>
                    <input type="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                     />
                </div>
                <div className="form-input-div form-btn-div">
                    <button type="button" onClick={handleSubmit} className="add-blog-btn btn">Register</button>
                </div>
            </form>
        </div>
     );
}
 
export default Registration;