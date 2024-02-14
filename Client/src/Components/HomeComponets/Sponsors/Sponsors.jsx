import React from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';

const Sponsors = () => {
    const companies = ["https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-1-2.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-2-1.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-3-1.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-4-1.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-5-1.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-6-1.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-8-1.svg",
    "https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-7-1.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-9-1.svg","https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/brand-10-1.svg"]
    return (
        <div className=' py-10 lg:px-0 px-2'>
           <WidthContainer>
            <div className=' grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5'>
            {
                companies.map((item,index)=>{
                 return   <div className='p-10 rounded-lg border hover:shadow shadow-color_global_secondary' key={index}>
                        <img src={item} alt="" />
                    </div>
                })
            }
            </div>
           </WidthContainer>
            
        </div>
    );
}

export default Sponsors;
