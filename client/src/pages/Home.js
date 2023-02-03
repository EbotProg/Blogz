import Blogs from "./Blogs";
// import { DotenvConfigOptions } from "dotenv";
import { BlogContext } from '../App';
import React from "react";

const Home = () => {
    // console.log(DotenvConfigOptions.URL);
    const {blogs, loading, error} = React.useContext(BlogContext);
    
    return ( 
       
        <div className="home page">
            
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque similique error iste aliquam velit porro adipisci iusto? Quod similique perferendis repudiandae quas cumque magnam harum? Cum omnis minus enim assumenda!Lorem
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores minus magnam repudiandae id sit repellendus odio beatae? Cum sequi dignissimos distinctio ducimus dolores sapiente. Officia provident voluptatem nulla dolor totam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam quisquam quidem iste eaque. Voluptas excepturi repellat ipsam molestias deleniti at voluptatibus neque, numquam quisquam optio fugit distinctio asperiores commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis atque voluptates porro et asperiores. Dicta adipisci ab quasi laboriosam vero officiis fugiat cupiditate earum, odit, necessitatibus dolore veritatis illo?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic at maiores qui aspernatur! Sint architecto itaque ullam explicabo soluta dolores quos alias ab, mollitia, expedita ad. Minus, quia eos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, doloremque dolorem. Dignissimos, quia veritatis molestiae quos corporis soluta in totam nisi quas, asperiores ipsam nulla provident esse repellendus enim autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium obcaecati quaerat odio unde perspiciatis doloribus aspernatur porro ab. Aut doloribus id earum eius tempora ipsa necessitatibus reprehenderit consectetur dolore.
            </p>
        
        </div>
        
     );
}
 
export default Home;