import { useState, useRef, useEffect } from "react";
import useAxios from "../api/UseAxios";
import { useNavigate } from "react-router-dom";



const Login = () => {

    let url = '/users';
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [errMsg, setErrMsg] = useState('');
    let [successMsg, setSuccessMsg] = useState('');
    let { data:users, loading, error } = useAxios(url);
    let navigate = useNavigate();

    let errElement = useRef(0);
    let successElement = useRef(0);
    let firstInput = useRef(0);

    useEffect(()=>{
        firstInput.current.focus();
    }, [])

    useEffect(()=>{
        setErrMsg('');
        setSuccessMsg('');
    }, [username, password])

//function to check credential(username and/or password)
 function validCredential(users, credential, inputName){
   for(let i=0; i < users.length; i++){
           if(credential !== users[i][inputName] || credential.length === 0){//if credential is not found in db
                  if(i === users.length-1){// if this is the last element in db
                  console.log(`Invalid ${inputName}`);
                  return false;
                  }
                  console.log(i, credential, users[i][inputName])
                  continue;//leave this element and check the next element
                  
           }
           else if(credential === users[i][inputName]){//if credentail is found in db
            
                console.log(`valid ${inputName}`);
                return true;
           }
   }

 }

//function that will check credentials
// function checkCredentials(users, username, password, credentialCorrect) {

    //  users.forEach(user => {
    //     if(user.username === username && user.password === password){
    //         setSuccessMsg('Login successfully :)');
    //         credentialCorrect.value = true;
    //          navigate('/');
    //          return;
    //     }
    //     else if(user.username !== username || username.length === 0){
    //         // setErrMsg('Invalid username');
    //         credentialCorrect.value = false;
    //         console.log('',credentialCorrect.value)
            
    //     }else if(user.password !== password || password.length === 0){
    //         setErrMsg('Invalid password');
    //         credentialCorrect.value = false;
    //         return;
    //     }
    // });
// }

    //function to handle submit of login form
    function handleSubmit(cb,users, username, password){
        console.log('hello');

        let validUsername = cb(users, username, 'username');
        let validPassword = cb(users, password, 'password');
        if(!validUsername){
        console.log(validUsername);
        setErrMsg('Invalid username')
         return;
        }if(!validPassword){
            console.log(validPassword);
            setErrMsg('Invalid password');
         return;
        }else{
            console.log('everything is ok');
            navigate('/');
        }
        

    
    }


    
    return ( 
        <div className="form-content">
            <h2 className="form-title">Login</h2>
            <form>
                <p className="error-msg" ref={errElement}>{errMsg}</p>
                <p ref={successElement}>{successMsg}</p>
                <div className="form-input-div">
                <label htmlFor="">Username: </label>
                <input
                ref={firstInput}
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
                    <button type="button" onClick={()=> {handleSubmit(validCredential, users, username, password)}} className="add-blog-btn btn">Log in</button>
                </div>
            </form>
        </div>
     );
}
 
export default Login;