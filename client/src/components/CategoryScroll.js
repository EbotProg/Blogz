import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import { useRef } from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CategoryScroll = () => {

   let categs = useRef();

    function scrollLeft(){

        categs.current.scrollBy(350, 0);
    }

    function scrollRight(){
        categs.current.scrollBy(-350, 0);

    }

    return ( 
        <div className="categ-scroll">
        <OverlayTrigger placement='top' overlay={<Tooltip>scroll left</Tooltip>}>
        <button className='filter-btn left-filter-btn'>
        <AiOutlineDoubleLeft className='lg-icon  ' onClick={scrollRight} />
        </button>
        </OverlayTrigger>
            
            <div className="cover">
            <div className="categs" ref={categs}>
                <div className="categ categ-active">All</div>
                <div className="categ">Food</div>
                <div className="categ">News</div>
                <div className="categ">Business</div>
                <div className="categ">Technology</div>
                <div className="categ">Sport</div>
                <div className="categ">Celebrity</div>
                <div className="categ">Science</div>
                <div className="categ">Entertainment</div>
                <div className="categ">Style</div>
                <div className="categ">Travel</div>
                <div className="categ">Agriculture</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
                <div className="categ">Travel</div>
            </div>
            </div>
            <OverlayTrigger placement='top' overlay={<Tooltip>scroll right</Tooltip>}>
            <button className='filter-btn right-filter-btn'>
            <AiOutlineDoubleRight className='lg-icon' onClick={scrollLeft} />

            </button>
            
            </OverlayTrigger>
        </div>
     );
}
 
export default CategoryScroll;