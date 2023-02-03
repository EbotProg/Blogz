// import { BsFillGrid3X3GapFill, BsFillMenuButtonWideFill, BsFillMenuButtonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { RxDashboard } from 'react-icons/rx';//dashboard icon
import { FaRegCommentAlt } from 'react-icons/fa';// comment menu icon
import { MdLogout } from 'react-icons/md';//logout 
import { TfiHome } from 'react-icons/tfi';//home
import { GrMenu } from 'react-icons/gr';
import { VscAccount, VscHome } from 'react-icons/vsc';//default account info
import { BiEdit } from 'react-icons/bi';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Navbar = ({children}) => {

const [navbarIsShown, setNavbarIsShown] = useState(false);
    

    function handleMenuMobile(e){
      setNavbarIsShown(current => !current);
    }


   const menuItems = [
    {
        path:"/main/",
        name: "Home",
        icon: <VscHome className='md-icon'/>
    },
    {
        path:"/main/dashboard",
        name: "Dashboard",
        icon: <RxDashboard className='md-icon' />
    },
    {
        path:"/main/comment",
        name: "Comment",
        icon: <FaRegCommentAlt className='md-icon' />
    },
    {
        path:"/main/logout",
        name: "Logout",
        icon: <MdLogout className='md-icon' />
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

             <form className="search-form d-flex flex-row align-items-center justify-content-center" role="search">
             <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
            </div>

            
            <div className={navbarIsShown ? 'open-navbar nav-class' : 'close-navbar nav-class'}>

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
             </div>

      </div>

      {/* <div className="border"></div> */}


      <ul className="nav-list-items">

        {
             menuItems.map((item, index)=>{
                return(
                     <li key={index} className="nav-item">
                         <Link className="nav-item-link" to={item.path}>
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