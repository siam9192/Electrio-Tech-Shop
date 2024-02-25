import React, { useEffect, useState } from 'react';
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';
import products from '../../Components/product';
import CartCard from '../../Components/Reuse/Cards/CartCard';
import AxiosBase from '../../Axios/AxiosBase';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import CartData from '../../TanstackQuery/CartData';
import CheckoutPopup from '../../Components/CheckoutPopup/CheckoutPopup';

const Cart = () => {
    // const [cartItems,setCartItems] = useState([])
    const {user} = UserAuth();
    const {cartItems,cartRefetch,totalItems} = CartData();
    const [items,setItems] = useState(cartItems)
    const [isCheckoutPopup,setCheckOutPopup] = useState(false)
    useEffect(()=>{
        if(user){
        cartRefetch()
        }
    },[user])
    const totalAmount = items.reduce((prev,current)=>(current.product_details[0].pricing.discountPrice* current.quantity) + prev ,0)
    
    const checkout = ()=>{
     
        // const products = cartItems.map((item)=> {
        //   return {
        //     cart_id : item._id,
        //     product_id : new ObjectId(item.product_id),
        //     quantity: item.quantity,
        //     color: item.color,
        //     price: item.product_details[0].pricing.discountPrice,
        //   }
         

        // })

        AxiosBase().post(`/cart/payment`,{products:cartItems,total:totalAmount,customer:user.email})
        .then(res =>{
        window.location.replace(res.data.url)
        })
    
    }


    useEffect(()=>{
      setItems(cartItems)
    },[cartItems])
    const handelItems = (value,index)=>{
     
   const arr = items
   
   arr[index].quantity = value;
   
   setItems([...arr])
    }
   
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
                    cartItems.length ?
                    
                        items.map((product,index)=>{
                            return <CartCard product={product.product_details[0]} cart={product} handelItems={handelItems} index={index} key={index}></CartCard>
                        })
                    
                     :
                     <div className=' py-32 min-h-[80vh]'>
                  <h1 className=' text-4xl text-color_primary text-center'>You have no items </h1>
                     </div>
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
                  <p className=' text-color_primary'>Subtotal</p> <p>৳{Math.round(totalAmount)}</p>
               </div> 
               <div className=' pt-5 flex justify-between items-center font-semibold  border-gray-700'>
                  <p className=' text-color_primary '>Total</p> <p>৳{Math.round(totalAmount+((5/100)*totalAmount))}  <span className=' text-[10px] font-normal'>(VAT + delivery charge 5% included)</span></p>
               </div> 
               <button className=' py-3 w-full bg-color_red_orange text-white' onClick={checkout}>Proceed to Checkout</button>
              </div>
            </div>
               </div>
              </WidthContainer>

             {/* {
              isCheckoutPopup  &&  <CheckoutPopup></CheckoutPopup>
             } */}
        </div>
    );
}

export default Cart;
