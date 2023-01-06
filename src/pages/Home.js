import Blogs from "./Blogs";
// import { DotenvConfigOptions } from "dotenv";
import { BlogContext } from '../App';
import React from "react";

const Home = () => {
    // console.log(DotenvConfigOptions.URL);
    const {blogs, loading, error} = React.useContext(BlogContext);
    
    return ( 
       
        <div className="home">
            
            <h2 className="home-title">Recent Blogs</h2>
            { loading && <div className="skeleton-blogs">
                <div className="skeleton-content">
                    <div className="skeleton skeleton-img"></div>
                    <div className="skeleton-text-container">
                       <div className="skeleton skeleton-text"></div>
                       <div className="skeleton skeleton-text"></div>
                    </div>
                
                </div>
                <div className="skeleton-content">
                    <div className="skeleton skeleton-img"></div>
                    <div className="skeleton-text-container">
                       <div className="skeleton skeleton-text"></div>
                       <div className="skeleton skeleton-text"></div>
                    </div>
                
                </div>
                <div className="skeleton-content">
                    <div className="skeleton skeleton-img"></div>
                    <div className="skeleton-text-container">
                       <div className="skeleton skeleton-text"></div>
                       <div className="skeleton skeleton-text"></div>
                    </div>
                
                </div>
                <div className="skeleton-content">
                    <div className="skeleton skeleton-img"></div>
                    <div className="skeleton-text-container">
                       <div className="skeleton skeleton-text"></div>
                       <div className="skeleton skeleton-text"></div>
                    </div>
                
                </div>
                <div className="skeleton-content">
                    <div className="skeleton skeleton-img"></div>
                    <div className="skeleton-text-container">
                       <div className="skeleton skeleton-text"></div>
                       <div className="skeleton skeleton-text"></div>
                    </div>
                
                </div>
                <div className="skeleton-content">
                    <div className="skeleton skeleton-img"></div>
                    <div className="skeleton-text-container">
                       <div className="skeleton skeleton-text"></div>
                       <div className="skeleton skeleton-text"></div>
                    </div>
                
                </div>
                
                
            </div> }
            { error && <p> {error} </p>}
            {blogs && <Blogs />}
            
            
        
        </div>
        
     );
}
 
export default Home;