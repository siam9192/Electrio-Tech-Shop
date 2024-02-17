import React from 'react';
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';
import products from '../../Components/product';
import CartCard from '../../Components/Reuse/Cards/CartCard';

const Cart = () => {
    return (
        <div>
            <div className=' md:py-10 py-5 lg:px-0 px-2  bg-gray-100'>
                  <WidthContainer>
                  <h2 className=' md:text-xl text-black'>Home / My Cart</h2>
                  </WidthContainer>
                 

                </div>
              <WidthContainer>
              <div className='lg:px-0 px-2 flex lg:flex-row flex-col gap-10 py-10'>
               <div className=' lg:w-[70%] space-y-4 '>
                {
                    products.slice(0,4).map((product,index)=>{
                        return <CartCard product={product} key={index}></CartCard>
                    })
                }
            <div className=' py-5 space-y-1'>
                <h2 className=' text-color_primary font-semibold'>Apply Coupon</h2>
            <div className='  flex md:flex-row flex-col md:gap-0 gap-1 md:items-center'>
               <div className=' md:w-1/2 w-full py-4 bg-gray-100'>
               <input type="text" placeholder='Coupon Code' className='  rounded-md w-full bg-transparent px-2 outline-none'  />
               </div>
                <button className=' py-4 px-6 bg-color_primary text-white'>Apply Coupon</button>
               </div>
            </div>
            </div>
            <div className='lg:w-[30%]  space-y-4'>
              <div  className=' p-5 space-y-5 bg-gray-100'>
              <h1 className=' text-color_primary font-semibold text-xl'>Cart Totals</h1>
               <div className=' pt-5 flex justify-between items-center pb-4 border-b border-gray-700'>
                  <p className=' text-color_primary'>Subtotal</p> <p>${7999}</p>
               </div> 
               <div className=' pt-5 flex justify-between items-center font-semibold  border-gray-700'>
                  <p className=' text-color_primary '>Total</p> <p>${7999}</p>
               </div> 
               <button className=' py-3 w-full bg-color_red_orange text-white'>Proceed to Checkout</button>
              </div>
            </div>
               </div>
              </WidthContainer>
        </div>
    );
}

export default Cart;
