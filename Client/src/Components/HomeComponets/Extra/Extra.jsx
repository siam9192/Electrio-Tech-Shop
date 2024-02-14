import React from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';

const Extra = () => {
    return (
        <div className='lg:px-0 px-2'>
          <WidthContainer>
            <div className='bg-color_yellow lg:h-52 p-10 rounded-lg relative overflow-hidden'>
         
            <div className=' lg:flex justify-between items-center lg:space-y-0 space-y-5'>
            <div>
           <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/earphone-2-1.png" alt="" className='-bt-20 lg:block hidden' />
           </div>
               <div className=' z-10'>
               <h1 className=' text-4xl text-color_primary font-bold'>
                 Super Friendly <br /> Electronics Store
                 </h1>
               </div>
                 <div className=' flex md:flex-row flex-col-reverse items-center gap-8'>
                    <button className='px-6 py-3 bg-color_primary text-white rounded-lg'>Shop Now</button>
                    <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/watch-1.png" alt="" />

                 </div>
            </div>
            </div>
           
          </WidthContainer>
        </div>
    );
}

export default Extra;
