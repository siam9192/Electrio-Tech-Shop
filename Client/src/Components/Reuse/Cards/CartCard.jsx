import React, { useState } from 'react';
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/UserAuth/UserAuth';
import CartData from '../../../TanstackQuery/CartData';

const CartCard = ({product,cart,handelItems,index}) => {
    const [quantity,setQuantity] = useState(cart.quantity||1)
    const {cartRefetch} = CartData();

    const handleRemove = ()=>{
        AxiosBase().delete(`/delete/product/cart/${cart._id}/user`)
        .then(res =>{
            if(res.data.deleteStatus){
        cartRefetch()
            }
        })
    }

    console.log(cart)
    return (
        <div className=' flex md:flex-row flex-col gap-2 md:justify-between md:items-center '>
                            <div className=' w-[%] flex gap-3 items-center'>
                                <img src={product.images[0]} alt="" className='w-40' />
                                <div className='  space-y-2'>
                                <h1 className=' md:text-xl font-semibold text-color_primary'>
                                {product.model.length > 30 ? product.model.slice(0,30) + '...' : product.model}
                                </h1>
                                <p className=' text-color_light_red font-semibold'> ৳{product.pricing.discountPrice}</p>
                         
                            </div>
                            </div>
                         
                            <div  className=' space-y-1'>
                                
                                <div>
                                    <input type="number"  defaultValue={cart.quantity} className=' w-32 py-3 outline-none text-center border border-color_primary text-color_primary' onChange={(e)=>handelItems(parseInt(e.target.value)||1,index)}/>
                                </div>
                            </div>
                            <div>
                              <h1 className='  text-color_primary font-bold '>৳{product.pricing.discountPrice*cart.quantity}</h1>
                              <button className=' hover:text-color_light_red' onClick={handleRemove}>Remove</button>
                            </div>
                        </div>
    );
}

export default CartCard;
