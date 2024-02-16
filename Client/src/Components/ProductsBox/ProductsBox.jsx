import React, { useEffect, useState } from 'react';
import { HiViewGrid } from "react-icons/hi";
import {FaListUl}  from 'react-icons/fa6';
import GridCard from '../Reuse/Cards/GridCard.jsx'
import ListCard from '../Reuse/Cards/ListCard.jsx';
const ProductsBox = ({products}) => {
    const [type,setType] = useState('grid');
  
    const sorts = [{
        name:'Default sorting',
        value:''
    },{
        name:'Price Low-High',
        value:''
    },{
        name:'Price High-Low',
        value:''
    },{
        name:'Ratting',
        value:''
    },{
        name:'Sale',
        value:''
    }]
   useEffect(()=>{
    const value= localStorage.getItem('card-type')||'grid';
    setType(value)
   },[])

   const handleType = (value)=>{
    setType(value);
    localStorage.setItem('card-type',value)
   }

    return (
        <div>
            <div className=' md:flex justify-between items-center pb-5'>
                   <h2 className=' text-text_color text-xl'>Showing all 7 results</h2>
                   <div className=' flex items-center gap-2'>
                    <div className=''> 
                        <select name="" id="" className=' py-2 px-4 border bg-white'>
                        {
                            sorts.map((item,index)=><option key={index}>{item.name}</option>)
                        }
                        </select>
                    </div>
                    <div className=' md:flex items-center gap-4 text-2xl md:block hidden'>
                    <div className={`p-1 border hover:cursor-pointer ${type === 'grid' ? 'text-color_secondary' : 'text-black'}`} onClick={()=>handleType('grid')}>
                    <HiViewGrid></HiViewGrid>
                    </div>
                    <div className={`p-1 border hover:cursor-pointer ${type === 'list' ? 'text-color_secondary' : 'text-black'}`} onClick={()=>handleType('list')}>
                        <FaListUl></FaListUl>
                    </div>
                 
                    </div>
                   </div>

                   </div>
                   <div className={`py-5 ${type === 'grid' ? 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5' : 'space-y-5'}`}>
                   {
                    type === 'grid' ? 
                    
                        products.map((product,index)=><GridCard product={product} key={index}></GridCard>)
                    
                    :
                    
                        products.map((product,index)=><ListCard product={product} key={index}></ListCard>)
                    
                   }
                   </div>
        </div>
    );
}

export default ProductsBox;
