import React from 'react';
import products from '../product';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const CartBar = ({setCart}) => {
    const navigate = useNavigate();
    return (
        <div className=' py-10 fixed top-0 right-0  bg-white md:w-[400px] h-full w-[70%] z-40 overflow-y-auto'>
            <h1 className=' text-xl font-medium border-b pb-3 text-color_primary px-10'>Your Cart (0 items)</h1>
            <div className=' pt-5 px-5 space-y-4 overflow-y-auto'>
                {
                    products.slice(0,4).map((product,index)=>{
                        return <div className=' flex gap-2' key={index}>
                            <div className=' w-[40%]'>
                                <img src={product.images[0]} alt="" />
                            </div>
                            <div className=' w-full space-y-2'>
                                <h1 className=' md:text-xl font-semibold text-color_primary'>
                                {product.name.length > 30 ? product.name.slice(0,30) + '...' : product.name}
                                </h1>
                            <div  className=' space-y-1'>
                                <p className=' text-[14px] text-text_color'>Unit Price : ${product.pricing.discountPrice}</p>
                                <div>
                                    <input type="number"  defaultValue={1} className=' w-32 py-3 outline-none text-center bg-gray-100 text-color_primary'/>
                                </div>
                            </div>
                            </div>
                        </div>
                    })
                }
                <div className='space-y-1'>
                    <p className=' text-color_primary font-semibold text-center'>Total: BDT.308988.00</p>
                    <div className='flex items-center'>
                        <div className=' border border-color_primary py-4 w-full text-color_primary text-center font-bold hover:cursor-pointer' onClick={()=>navigate('/my-cart')}>View cart</div>
                        <div  className=' border border-color_primary bg-color_primary text-white hover:bg-color_yellow py-4 w-full hover:text-color_primary text-center font-bold hover:cursor-pointer'>Checkout</div>
                    </div>
                </div>
            </div>

            <div className=' absolute right-2 top-2 text-color_primary text-3xl hover:cursor-pointer' onClick={()=>setCart(false)}>
                <RxCross2></RxCross2>
            </div>
        </div>
    );
}

export default CartBar;
