import React, { useState } from 'react';
import Rating from 'react-rating';
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";
import { FaArrowRight, FaArrowRightLong, FaArrowsLeftRight, FaBangladeshiTakaSign } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { json, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { insert } from '../../../Redux/Reducer/ShortDetails';
import AxiosBase from '../../../Axios/AxiosBase';
import UserAuth from '../../../Authentication/UserAuth/UserAuth';
import toast, { Toaster } from 'react-hot-toast';
const GridCard = ({product}) => {

    const [isHover,setHover] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user} = UserAuth();

   
   
    const handleHover = (value)=>{
        setHover(value)
    }

    const goDetails = (id)=>{
      navigate(`/products/product/details/${id}`)
    }
    const handleDispatch = ()=>{
   dispatch(insert(product))
    }

    const addToFav = ()=>{

        if(user){
        const details = {
            productId:product._id,
            customer:user.email
        }
        AxiosBase().post('/add/products/favourite',details)
        .then(res =>{
            if(res.data.insertedId){
                toast.success('Successfully added')
            }
            else{
                toast.error('Already added')
            }
        })

    }
    else{
        
      const data = JSON.parse(localStorage.getItem('favourites'))||[]
     
        const find = data.find(item => item === product._id);
        if(find){
            toast.error('Already added')
            return;
        }
         data.push(product._id);
  
        localStorage.setItem('favourites',JSON.stringify(data))
        toast.success('Successfully added')

    }
    }
    return (
        <div className='border rounded-lg flex flex-col hover:cursor-pointer' onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)} >
            <div className=' flex-grow flex justify-center overflow-hidden relative'>
            <img src={product.images[0]} alt="" className={`w-10/12 transition-all duration-500 ease-out ${isHover ? ' scae-110' : 'scale-100'}`}/>

            <div className={` space-y-3 absolute top-2 transition-all duration-200 ${isHover ? 'right-2' : '-right-[200%]'}`}>
                <div className='w-10 h-10 rounded-full bg-color_secondary text-white flex justify-center items-center text-xl' onClick={handleDispatch}>
                  <IoSearch></IoSearch>
                </div>
                <div className='w-10 h-10 rounded-full bg-color_secondary text-white flex justify-center items-center text-xl' onClick={addToFav}>
                   <AiOutlineHeart></AiOutlineHeart>
                </div>
            </div>
            

            </div>
            <div className='p-5 space-y-2'>
              
                <h1 className={`text-xl text-color_primary ${isHover ? ' underline text-color_secondary' :''}`} 
                onClick={()=>{goDetails(product._id)}}>{product.model.length > 30 ? product.model.slice(0,30) + '...' : product.model}</h1>
               <div className=' flex justify-between items-center'>
               {
                isHover ? <div className=' flex items-center gap-2 text-color_secondary font-bold'>
                <span>Add To Cart</span>  <FaArrowRightLong></FaArrowRightLong>
               </div>
               :
               <h2><del>৳ {product.pricing.price}</del><span className=' text-color_primary font-semibold text-[18px]'>  ৳ {product.pricing.discountPrice}</span></h2>
               }
              
               <Rating readonly initialRating={4.5} emptySymbol={<TiStarOutline></TiStarOutline>} fullSymbol={<TiStarFullOutline></TiStarFullOutline>}/>
               </div>
              

        
            </div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
        </div>
    );
}

export default GridCard;
