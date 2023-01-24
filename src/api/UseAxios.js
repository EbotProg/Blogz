import { useEffect, useState } from "react";
import axios from "./AxiosInstance";

const useAxios = (url) => {

    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(null);


 useEffect(()=>{
  const abortCont = new AbortController();

 setTimeout(()=>{

axios.get(url, {signal: abortCont.signal})
    .then((res)=>{
        console.log(res.data);
        setData(res.data);
        setLoading(false);
        setError(null);
    })
    
    .catch(err=>{
        if(err.name === 'AbortError'){
          
            console.log('fetch aborted')
        }else{
         
            console.log(err.message);
            setLoading(false);
            setError(err.message)
        }

    })
 }, 10000)
    

    
    return ()=> abortCont.abort();
 }, [])

 return { data, loading, error }
}
 
export default useAxios;