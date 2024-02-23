import React from 'react';
import products from '../../Components/product'
const OrderDetails = () => {
    return (
        <div className=' space-y-3'>
                {
                  products.slice(0,4).map((order,index)=>{
                  return  <div className='p-3 hover:bg-gray-100 hover:cursor-pointer w-full' key={index}>
                      <div className=' flex items-center justify-between w-full'>
                       
                      <img src={order.images[0]} alt="" className='h-32'/>
                     <div>

                     <h2>{order.name.slice(0,50)}</h2>
                     <h2 className=' text-end text-color_red_orange font-semibold'>৳{order.pricing.discountPrice}</h2>
                     <div className=' flex justify-end items-center pt-2'>
                    
                     <p className=' text-white bg-color_secondary py-1 px-3 text-[12px] rounded-full w-fit'>{'Processing'}</p>

                     </div>
                     </div>
                   
                      </div>
                    </div>
                  })
                }
             </div>
    );
}

export default OrderDetails;
