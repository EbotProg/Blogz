import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-content">
            <div className="navbar-top-div">
            <h2 className="navbar-title"><Link className='nav-link' to="#">Blogz</Link></h2>
            <BsFillGrid3X3GapFill className='nav-menu' />
            </div>
            <ul className="list-items">
            <li className="list-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="list-item"><Link className="nav-link" to="/create">New Blog</Link></li>
            </ul>
            
            </div>
            
        </div>
     );
}
 
export default Navbar;