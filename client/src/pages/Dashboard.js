import  Masonry from 'react-masonry-css'; 
import CategoryScroll from '../components/CategoryScroll';
import {RxDot} from 'react-icons/rx';
import { AiOutlineHeart } from 'react-icons/ai';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    return ( 
        <div className="page dashboard">

            <CategoryScroll />
            <button onClick={()=>{ navigate('/main/create')}} className='create-blog-btn create-blog-dash-btn shadow-sm'><AiOutlinePlus/>New Blog</button>

                <Masonry 
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid "
                columnClassName="my-masonry-grid_column dashcards"
                >
<div className="dashcard shadow">
                    <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">News</div>
                    </OverlayTrigger>
                    
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-2.webp" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>

                    
                    </div>
                </div>
                <div className="dashcard shadow">
                <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Business</div>
                    </OverlayTrigger>                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-3.png" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>
                </div>
                <div className="dashcard shadow">
                <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Technology</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-5.webp" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>                
                    </div>
                <div className="dashcard shadow">
                <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Sport</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img4.jpg" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>                </div>
                <div className="dashcard shadow">
                <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Celebrity</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-7.jfif" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>
                </div>
                <div className="dashcard shadow">
                <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Science</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-8.jpg" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>
                </div>
                <div className="dashcard shadow">
                <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Entertainment</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-9.jfif" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>
                </div>
                <div className="dashcard shadow">
 <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Style</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-10.jpg" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>
                </div>
                <div className="dashcard shadow">
 <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Food</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-11.avif" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>
                </div>
                <div className="dashcard shadow">
                <OverlayTrigger placement="top" overlay={<Tooltip>blog category</Tooltip>}>
                    <div className="dashcard-category">Travel</div>
                    </OverlayTrigger>
                    <div className="dashcard-img-div"><img className="dashcard-img" src="/img-12.jpg" alt="" /></div>
                    <h3 className="dashcard-title">The Story Of Programming</h3>
                    <div className="bottom-dashcard">
                    <div className="dashcard-author-info">
                        
                        <span className='dashcard-author'>EbotProg<RxDot  className='dashcard-author-dot'/>  </span>
                    <OverlayTrigger placement='top' overlay={<Tooltip>1st January 2023</Tooltip>}>    
                        <span className='dashcard-time'>now</span>
                    </OverlayTrigger>
                    </div>
                    <OverlayTrigger placement='top' overlay={<Tooltip>like blog</Tooltip>}>
                    <button className='dashcard-like-btn'>
                    <AiOutlineHeart className="md-icon dashcard-like-btn" />
                    </button>
                    </OverlayTrigger>
                    </div>
                </div>
                </Masonry>
                
        </div>
     );
}
 
export default Dashboard;