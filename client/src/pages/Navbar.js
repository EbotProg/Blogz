// import { BsFillGrid3X3GapFill, BsFillMenuButtonWideFill, BsFillMenuButtonFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { RxDashboard } from 'react-icons/rx';//dashboard icon
import { FaRegCommentAlt } from 'react-icons/fa';// comment menu icon
import { MdLogout, MdOpenInFull } from 'react-icons/md';//logout 
import { TfiHome } from 'react-icons/tfi';//home
import { GrMenu } from 'react-icons/gr';
import { VscAccount, VscHome } from 'react-icons/vsc';//default account info
import { BiEdit } from 'react-icons/bi';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BsSearch } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';


const Navbar = ({children}) => {

    const [homeNavItemClicked, setHomeNavItemClicked] = useState(false);
    const [dashboardNavItemClicked, setDashboardNavItemClicked] = useState(false);
    const [commentNavItemClicked, setCommentNavItemClicked] = useState(false);
    const [logoutNavItemClicked, setLogoutNavItemClicked] = useState(false);
    const navigate = useNavigate();

const currentRoute = useLocation();
//this useeffect is for changing the color of the nav item depending on the route
useEffect(()=>{
  if(currentRoute.pathname == '/main/'){
  setHomeNavItemClicked(true);
  }else if(currentRoute.pathname == '/main/dashboard'){
  setDashboardNavItemClicked(true);
  }else if(currentRoute.pathname == '/main/comment'){
  setCommentNavItemClicked(true);
  }else if(currentRoute.pathname == '/main/logout'){
  setLogoutNavItemClicked(true);
  }

}, [])
// //function for checking the route which is entered
// function handleNavItemClick(){
//     console.log(currentRoute);
// }

const [navbarIsShown, setNavbarIsShown] = useState(false);
    

    function handleMenuMobile(e){
      setNavbarIsShown(current => !current);
    }


   const menuItems = [
    {
        path:"/main/",
        name: "Home",
        icon: <VscHome className='md-icon'/>,
        className: homeNavItemClicked ? 'nav-item-link-clicked nav-item-link' : 'nav-item-link',
        onClick: ()=>{//when a nav item is clicked, change its color
            setHomeNavItemClicked(true);
            setDashboardNavItemClicked(false);
            setCommentNavItemClicked(false);
            setLogoutNavItemClicked(false);
        }
    },
    {
        path:"/main/dashboard",
        name: "Dashboard",
        icon: <RxDashboard className='md-icon' />,
        className: dashboardNavItemClicked ? 'nav-item-link-clicked nav-item-link' : 'nav-item-link',
        onClick: ()=>{
            setHomeNavItemClicked(false);
            setDashboardNavItemClicked(true);
            setCommentNavItemClicked(false);
            setLogoutNavItemClicked(false);
        }
    },
    {
        path:"/main/comment",
        name: "Comment",
        icon: <FaRegCommentAlt className='md-icon' />,
        className: commentNavItemClicked ? 'nav-item-link-clicked nav-item-link' : 'nav-item-link',
        onClick: ()=>{
            setHomeNavItemClicked(false);
            setDashboardNavItemClicked(false);
            setCommentNavItemClicked(true);
            setLogoutNavItemClicked(false);
        }
    },
    {
        path:"/main/logout",
        name: "Logout",
        icon: <MdLogout className='md-icon' />,
        className: logoutNavItemClicked ? 'nav-item-link-clicked nav-item-link' : 'nav-item-link',
        onClick: ()=>{
            setHomeNavItemClicked(false);
            setDashboardNavItemClicked(false);
            setCommentNavItemClicked(false);
            setLogoutNavItemClicked(true);
        }
    }
   ]

    return ( 
        <div className='body'>
          <div className="body-container">

          <div className="main-top-div">
            <div className="top-div shadow-sm d-flex flex-row">

                <div className="top-top-div flex-grow-1">
                <GrMenu onClick={handleMenuMobile}  className="nav-menu lg-icon mobile-view-menu-btn"  />
                 <h2 className="top-div-title"><Link className='nav-link' to="#">Blogz</Link></h2>
                </div>

             <form className="search-form" role="search">
               <input className="form-control me-1" type="search" placeholder="find blog" aria-label="Search" />
               <button className="btn btn-outline-dark" type="submit">Search</button>
             </form>

             <BsSearch className="lg-icon search-icon" />
            </div>

            
            <div className={navbarIsShown ? 'open-navbar nav-class shadow' : 'close-navbar nav-class'}>

      <div className="navbar-content">
      <div className="user-info">
             
             <div className="user-info-content">
                 <div className="user-image">
                     <img className='user-image-img' src="/image-victor.jpg" alt="" />
                 </div>
                 <OverlayTrigger placement='top' overlay={<Tooltip>Change profile picture</Tooltip>}>
                 <button className='change-pic-btn'><BiEdit className='md-icon' />Change</button>

                    </OverlayTrigger> 
                 
                 <div className="username">EbotProg</div>

                 <button className='create-blog-btn create-blog-nav-btn shadow-sm' onClick={()=>{ navigate('/main/create')}}><AiOutlinePlus/>New Blog</button>
             </div>

      </div>

      {/* <div className="border"></div> */}


      <ul className="nav-list-items">

        {
             menuItems.map((item, index)=>{
                return(
                     <li key={index} className="nav-item">
                         <Link className={item.className} to={item.path} onClick={item.onClick}>
                              <div className='link-icon'>{item.icon}</div>
                              <div className='link-name'>{item.name}</div>
                         </Link> 
                     </li>
     )
     

 })
}

</ul>

</div>



</div>
            </div>
            

            <div className="bottom-div">


                 <main>{children}</main>

            </div>
            </div>
        </div>
     );
}
 
export default Navbar;