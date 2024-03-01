import React, { useEffect, useState } from 'react';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../Axios/AxiosBase';
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';
import GridCard from '../../Components/Reuse/Cards/GridCard';
import { useNavigate } from 'react-router-dom';
import { pink } from '@mui/material/colors';

const Favourites = () => {
    const {user} = UserAuth();
    const [products,setProducts] = useState([])
    const [refetch,setRefetch] = useState(false)

    const navigate = useNavigate();
     useEffect(()=>{
      if(user){
        AxiosBase().get(`/get/products/favourite/${user.email}`)
        .then(res =>{
            setProducts(res.data)
        })
      }
      else{
    
     const data = JSON.parse(localStorage.getItem('favourites'))||[]
   
     if(data.length === 0){
        return
     }
     AxiosBase().post('/get/products/local/favourite',data)
     .then(res=>{
        setProducts(res.data)
     })
      }
     },[user,refetch])

     const handleRemove =(id,pId,index)=>{
  
       if(user){
        AxiosBase().delete(`/delete/products/favourite/${id}`)
        .then(res =>{
            if(res.data.deletedCount){
                const filter = products.filter(item=> item._id !== id);
                setProducts(filter)
            }
        })

       }

       else{
    
        const data = JSON.parse(localStorage.getItem('favourites'))
        const  filter = data.filter(i => i !== pId)
     
        localStorage.setItem('favourites',JSON.stringify(filter)) 
        const fil2  = products;
        fil2.splice(index,1)
        setProducts(fil2)

       }
     }
     console.log(products)

    
    return (
        <div>
            <WidthContainer>
            <div className=' py-5'>
            <h1 className=' text-color_primary font-semibold text-2xl'>My Favourites </h1>
          {
            products.length ?
            <div className=' py-10 grid lg:grid-cols-3 md:grid-cols-2  gap-2'>
            {
                products.map((product,index)=>{
                    return <div className='  ' key={index}>
                    <div className=' w-[%] flex flex-col gap-3 items-center'>
                        <img src={product.product.images[0]} alt="" className='max-h-[300px]' />
                        <div className='  space-y-2'>
                        <h1 onClick={()=>navigate(`/products/product/details/${product.product._id}`)} className=' md:text-xl font-semibold text-color_primary hover:cursor-pointer hover:text-color_secondary'>
                        {product.product.model.length > 30 ? product.product.model.slice(0,30) + '...' : product.product.model}
                        </h1>
                        <p className=' text-color_light_red font-semibold'> ৳{product.product.pricing.discountPrice}</p>
                 
                    </div>
                    </div>
                 
                    <div  className=' space-y-1'>
                        
                        
                    </div>
                    <div className=' text-end'>
                     
                      <button className=' hover:text-color_light_red text-xl bg-color_secondary text-white px-4 py-2 rounded-md my-4' onClick={()=>handleRemove(product._id,product.product._id,index)}>Remove</button>
                    </div>
                </div>
                
                })
            }
        </div>
        :
        <div className=' py-32 text-center '>
            <h1 className=' text-3xl text-color_primary font-semibold'>No Products Added</h1>
        </div>
          }
            
        </div>
            </WidthContainer>
        </div>
    );
}

export default Favourites;
