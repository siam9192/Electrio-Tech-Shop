import React, { useEffect, useRef, useState } from 'react';
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';
import products from '../../Components/product';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import FlashCard from '../../Components/Reuse/Cards/FlashCard';
import { useQuery } from '@tanstack/react-query';
import AxiosBase from '../../Axios/AxiosBase';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAlert } from '../../Redux/Reducer/AlertSlice';
import UserAuth from '../../Authentication/UserAuth/UserAuth'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductsDetails = () => {
    const [activeImage,setActiveImage] = useState(0)
    const [quantity,setQuantity] = useState(1);
    const [selectedColor,setSelectedColor] = useState(0)
    const quantityRef = useRef();
    const {pathname} = useLocation()
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch ();
    const [relatedProducts,setRelatedProducts] = useState([]);
    const {user} = UserAuth()
    const {data:product=null} = useQuery({
        queryKey:['product'],
        queryFn:async()=>{
            const   res = await AxiosBase().get(`/get/product/${id}`)
            return  res.data;
        }
    })

    useEffect(()=>{
        window.scrollTo(0,0)
        if(product){
            AxiosBase().get(`/related/products?category=${product.details.category}&id=${id}`)
            .then(res =>{
                setRelatedProducts(res.data)

            })

            
        }
    },[product,id])
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

    const handleDispatch = ()=>{
        dispatch(handleAlert({status:true,text:null}))
        setTimeout(()=>{
           dispatch(handleAlert({status:false,text:null}))
        },2000)
    }

    const addCart = ()=>{

        if(!user){
        navigate('/login',{state:pathname})
        return;
            
        }
        const cart = {
            product_id: id,
            quantity,
            color: product.details.colors[selectedColor],
            customer:user.email,
            added: {
                date:{
                 day: new Date().getDay(),
                 month: new Date().getMonth()+1,
                 year: new Date().getFullYear()
                },
                time:{
                 hours: new Date().getHours(),
                 minute: new Date().getMinutes(),
                 seconds: new Date().getSeconds()
                }
             }

        }

        AxiosBase().post('/add/product/cart',cart)
        toast('Successfully added!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
       

       
    }
   
    return (
        <div>
              <div className=' md:py-10 py-5 llg:px-0 px-2  bg-gray-100'>
                  <WidthContainer>
                  <h2 className=' md:text-xl text-black'>Home / Products / {product?.model}</h2>
                  </WidthContainer>
             
                </div>
            <div className=' py-20 lg:px-0 px-2'>
            <WidthContainer>
                    <div className=' grid lg:grid-cols-2 gap-5'>
                        <div className=' flex md:flex-row flex-col gap-5'>
                         <img src={product?.images[activeImage]} alt="" className=' max-h-[500px]' />
                         <div className=' md:flex flex-col    grid  grid-cols-4  gap-3'>
                            {
                                product?.images.map((image,index)=> <img src={image} key={index} className={`max-h-32 p-5 border ${activeImage === index ? ' border-color_light_red border-2' : ''} hover:cursor-pointer`} onClick={()=>setActiveImage(index)}></img>)
                            }
                         </div>

                        </div>
                        <div className=' space-y-5'>
                        <div className=' space-y-1'>
                        <h1 className=' md:text-3xl text-2xl text-color_primary font-medium'>{product?.model}</h1>
                        <h1 className=' md:text-2xl text-xl text-color_secondary font-semibold'><span  className=' line-through fle items-center gap-1'>৳{product?.pricing.price}</span> <span>৳{product?.pricing.discountPrice}</span></h1>
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
                        <div className=' space-y- flex items-center gap-3'>
                            <h2 className=' text-xl text-color_primary font-medium'>Select Colors :</h2>
                            <div className=' flex items-center gap-2 flex-wrap'>
                                {
                                    product?.details.colors.map((color,index)=> <div className={`${selectedColor === index ? 'border-2 border-color_secondary' : ''} rounded-full p-1 hover:cursor-pointer`} key={index} onClick={()=>setSelectedColor(index)}>
                                        <div className={`w-5 h-5 rounded-full `} style={{backgroundColor:color}}></div>
                                    </div>)
                                }
                            </div>
                        </div>

                        <div className=' flex md:flex-row flex-col md:items-center  gap-3'>
                            <div className=' flex items-center gap-1 bg-gray-200 px-2'>
                                <div className=' text-xl text-black hover:cursor-pointer' onClick={dec}> <FaMinus></FaMinus>  </div>
                                <input type="number" min='1' value={quantity} className=' md:w-40 w-full py-3 bg-transparent border-none outline-none text-center text-black' />

                                <div className=' text-xl text-black hover:cursor-pointer' onClick={inc}><LuPlus></LuPlus></div>
                            </div>
                            <button className=' py-3 px-10 bg-color_secondary text-white' onClick={addCart}>Add To Cart</button>
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
                        <div className=' space-y-4 py-10'>
                            {/* <h1> <span className=' font-semibold text-color_primary'>Model : </span>
                             {'Smart Phone'}
                            </h1> */}
                            <h1> <span className=' font-semibold text-color_primary'>Product : </span>
                             {product?.details.name}
                            </h1>
                            <h1> <span className=' font-semibold text-color_primary'>Category : </span>
                             {product?.details.category}
                            </h1>
                            <h1> <span className=' font-semibold text-color_primary'>Search Tags : </span>
                             {
                             product?.searchKeywords?.join(',')
                             }
                            </h1>
                        </div>

                        <div className=' p-5 border-t border-b flex items-center gap-2 text-xl'>
                            <span>Share This :</span>
                      <div className=' flex items-center gap-2'>
                      <FaFacebook></FaFacebook> <FaSquareXTwitter></FaSquareXTwitter> <FaInstagram></FaInstagram>
                      </div>
                        </div>
                        <fieldset className=' border py-5 md:px-10 px-5'>
                            <legend className='  text-color_primary font-semibold'>Guarantee Safe Checkout </legend>
                            <div className=' grid grid-cols-6 gap-4'>
                                <img src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg" alt="" />
                                <img src="https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png" alt="" />
                            <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/Visa.svg" alt="" className=''/>
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/PayPal.svg"  className='' alt="" />
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/Mastercard.svg"  className='' alt="" />
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/ApplePay.svg"  className='' alt="" />

                            </div>

                        </fieldset>
                        </div>
                    </div>
                    <div className=' mt-20 border-t'>
                        <div className=' flex justify-center items-center gap-5'>
                        <button className=' py-3 md:px-10 px-5 bg-color_yellow text-color_primary text-xl font-bold'>Description</button>
                        <button className=' py-3 md:px-10 px-5 bg-color_yellow text-color_primary text-xl font-bold'>Reviews(0)</button>
                        </div>

                        <div className=' mt-10'>
                            <p>{product?.description}</p>
                        </div>

                    </div>

                    <div className=' py-10'>
                    <div className=' space-y-3'> <h3 className=' text-color_secondary text-center font-bold'>RELATED</h3>
                        <h1 className=' lg:text-4xl text-3xl text-center font-bold text-color_primary'>Related Products</h1></div>
                        <div className=' py-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                            {
                            relatedProducts.map((product,index)=>{
                                    return <FlashCard product={product} index={index}></FlashCard>
                                })
                            }
                        </div>
                    </div>
                </WidthContainer>
            </div>
         <ToastContainer></ToastContainer>
        </div>
    );
}

export default ProductsDetails;
