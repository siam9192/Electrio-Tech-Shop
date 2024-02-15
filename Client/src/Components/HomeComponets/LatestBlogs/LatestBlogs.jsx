import React from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';
import { FaArrowRight } from 'react-icons/fa6';

const LatestBlogs = () => {
    return (
        <div className=' py-10'>
            <WidthContainer>
            <div className=' flex justify-between items-center'>
            <div className=' space-y-3'>
                        <h3 className=' text-color_secondary font-bold'>Read Our Latest Blogs</h3>
                        <h1 className=' text-5xl font-bold text-color_primary'>Latest Insigths</h1>
                        </div>
                        <button className=' py-4 px-8 bg-color_yellow hover:text-color_primary font-semibold flex items-center gap-2'><span>Read All Blogs </span><FaArrowRight></FaArrowRight></button>
            </div>
            </WidthContainer>
            
        </div>
    );
}

export default LatestBlogs;
