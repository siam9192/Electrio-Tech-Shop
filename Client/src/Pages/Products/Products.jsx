import React from 'react';
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';

const Products = () => {
    return (
        <div className=''>
           
                <div className=' py-10  bg-gray-100'>
                  <WidthContainer>
                  <h2 className=' text-xl text-black'>Home / Products</h2>
                  </WidthContainer>

                </div>
            <WidthContainer>
                <div className=' flex gap-5 py-10'>
                    <div className=' w-[20%]'></div>
                    <div className=' w-full '>
                   <div className=' flex justify-between items-center pb-5'>
                   <h2 className=' text-text_color text-xl'>Showing all 7 results</h2>
                   <div className=' flex items-center gap-2'>
                    
                   </div>

                   </div>
                    </div>
                </div>
            </WidthContainer>
        </div>
    );
}

export default Products;
