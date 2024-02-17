import React, { useState } from 'react';

const CartCard = ({product}) => {
    const [quantity,setQuantity] = useState(1)
    return (
        <div className=' flex md:flex-row flex-col gap-2 md:justify-between md:items-center '>
                            <div className=' w-[%] flex gap-3 items-center'>
                                <img src={product.images[0]} alt="" className='w-40' />
                                <div className='  space-y-2'>
                                <h1 className=' md:text-xl font-semibold text-color_primary'>
                                {product.name.length > 30 ? product.name.slice(0,30) + '...' : product.name}
                                </h1>
                                <p className=' text-color_light_red font-semibold'> ${product.pricing.discountPrice}</p>
                         
                            </div>
                            </div>
                         
                            <div  className=' space-y-1'>
                                
                                <div>
                                    <input type="number"  defaultValue={1} className=' w-32 py-3 outline-none text-center border border-color_primary text-color_primary' onChange={(e)=>setQuantity(parseInt(e.target.value))}/>
                                </div>
                            </div>
                            <div>
                              <h1 className='  text-color_primary font-bold '>${product.pricing.discountPrice*quantity}</h1>
                              <button>Remove</button>
                            </div>
                        </div>
    );
}

export default CartCard;
