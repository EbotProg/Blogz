import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {


    const [isShown, setIsShown] = useState(false);

   function handleMenuClick(e) {
    setIsShown(current => !current);
   }

    return ( 
        <div className="navbar">
            <div className="navbar-content">
            <div className="navbar-top-div">
            <h2 className="navbar-title"><Link className='nav-link' to="#">Blogz</Link></h2>
            <BsFillGrid3X3GapFill onClick={handleMenuClick} className="nav-menu"  />
            </div>
            <ul className={isShown? 'display-block list-items': 'display-none'}>
            <li className="list-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="list-item"><Link className="nav-link" to="/create">New Blog</Link></li>
            </ul>
            
            </div>
            
        </div>
     );
}
 
export default Navbar;