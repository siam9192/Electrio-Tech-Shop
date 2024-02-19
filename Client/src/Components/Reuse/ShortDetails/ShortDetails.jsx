import React, { useState } from 'react';
import { FaMinus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { insert } from '../../../Redux/Reducer/ShortDetails';
const ShortDetails = () => {
    const [activeImage,setActiveImage] = useState(0)
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.shortDetails.product);
       const inc = ()=>{
        const plus = quantity + 1;
       
           setQuantity(plus)
        
        
       }
       const dec = ()=>{
           const dec = quantity - 1;
           if(dec > 0){
               setQuantity(dec)
            }
       }

    
    return (
        <div className=' fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex justify-center  py-10 z-40 overflow-y-auto scale-100  duration-500 ease-in transition-transform'>

            <div className=' md:w-10/12 w-[90%] bg-white h-fit md:p-10 p-5 relative'>
    
                    <div className=' grid lg:grid-cols-2 gap-5'>
                        <div className=' flex md:flex-row flex-col gap-5'>
                         <img src={product?.images[activeImage]} alt="" className=' max-h-[500px]' />
                         <div className=' md:flex flex-col    grid  grid-cols-4  gap-3'>
                            {
                                product?.images.map((image,index)=> <img src={image} className={`max-h-32 p-5 border ${activeImage === index ? ' border-color_light_red border-2' : ''} hover:cursor-pointer`} onClick={()=>setActiveImage(index)}></img>)
                            }
                         </div>

                        </div>
                        <div className=' space-y-5'>
                        <div className=' space-y-1'>
                        <h1 className=' md:text-3xl text-2xl text-color_primary font-medium'>{product?.model}</h1>
                        <h1 className=' md:text-2xl text-xl text-color_secondary font-semibold'><span  className=' line-through fle items-center gap-1'>BDT.{product?.pricing.discountPrice}</span> <span>BDT.{product?.pricing.discountPrice}</span></h1>
                        </div>
                       
                        <div className='  space-y-1'>
                            {
                                product?.details.spec.split('\n').map((spec,index)=>{
                                  return  <p className=' flex items-center gap-2' key={
                                         index
                                    }> <span className=' text-color_secondary'><GiCheckMark></GiCheckMark></span> <span>{spec}</span></p>
                                })
                            }
                        </div>
                        <div className=' space-y- flex items-center gap-3'>
                            <h2 className=' text-xl text-color_primary font-medium'>Colors :</h2>
                            <div className=' flex items-center gap-2 flex-wrap'>
                                {
                                    product?.details.colors.map((color,index)=> <div className=' w-5 h-5 rounded-full' style={{backgroundColor:color}}></div>)
                                }
                            </div>
                        </div>

                        <div className=' p-5 border space-y-4'>
                        <div className=' flex md:flex-row flex-col md:items-center  gap-3'>
                            <div className=' flex items-center gap-1 bg-gray-200 px-2'>
                                <div className=' text-xl text-black hover:cursor-pointer' onClick={dec}> <FaMinus></FaMinus>  </div>
                                <input type="number" min='1' value={quantity} className=' md:w-40 w-full py-3 bg-transparent border-none outline-none text-center text-black' />

                                <div className=' text-xl text-black hover:cursor-pointer' onClick={inc}><LuPlus></LuPlus></div>
                            </div>
                            <button className=' py-3 px-10 bg-color_secondary text-white'>Add To Cart</button>
                        </div>

                        <div className=' flex gap-3 items-center'>
                            <h1 className=' flex items-center gap-2 hover:cursor-pointer hover:text-color_secondary'>
                                <FaRegHeart></FaRegHeart> <span>Add To Wishlist</span>
                            </h1>
                            <h1 className=' flex items-center gap-2 hover:cursor-pointer hover:text-color_secondary'>
                            <SiGooglemessages></SiGooglemessages> <span>Ask about Product</span>
                            </h1>
                        </div>
                        </div>
                        
                        <div className=' p-5 border-t border-b flex items-center gap-2 text-xl'>
                            <span>Share This :</span>
                      <div className=' flex items-center gap-2'>
                      <FaFacebook></FaFacebook> <FaSquareXTwitter></FaSquareXTwitter> <FaInstagram></FaInstagram>
                      </div>
                        </div>
                     
                        </div>
                    </div>
                    <div className=' absolute right-2 top-2 text-3xl text-color_light_red hover:cursor-pointer ' onClick={()=>dispatch(insert(null))}>
                <FaWindowClose></FaWindowClose>
            </div>
        
            </div>
            
        </div>
    );
}

export default ShortDetails;
