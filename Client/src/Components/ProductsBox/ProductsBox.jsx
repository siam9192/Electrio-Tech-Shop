import React, { useEffect, useState } from 'react';
import { HiViewGrid } from "react-icons/hi";
import {FaListUl}  from 'react-icons/fa6';
import GridCard from '../Reuse/Cards/GridCard.jsx'
import ListCard from '../Reuse/Cards/ListCard.jsx';
import { FaFilter } from "react-icons/fa";
import FilterBox from '../FilterBox/FilterBox.jsx';
import { RxCross1 } from 'react-icons/rx';
import ShortDetails from '../Reuse/ShortDetails/ShortDetails.jsx';
import ProductsData from '../../TanstackQuery/ProductsData.js';
const ProductsBox = ({currentPage,setCurrentPage}) => {
    const [type,setType] = useState('grid');
    const [isFilterBox,setFilterBox] = useState(false);
    const [isShortDetails,setSortDetails] = useState(null)
    
    const {products,pages,refetch,isLoading,isFetching} = ProductsData(currentPage)
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
            <div>
            <div className=' flex justify-between items-center pb-5'>
                   <h2 className=' text-text_color md:text-xl'>Showing all 7 results</h2>
                   <div className=' flex items-center gap-3'>
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
                    <div className=' text-2xl lg:hidden text-color_secondary hover:cursor-pointer' onClick={()=>setFilterBox(true)}>
                        <FaFilter></FaFilter>
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
                   {
                    isLoading || isFetching ? <div className=' text-center py-20'>
                        <span className="loading loading-ring w-32 text-color_secondary"></span>
                    </div>
                    :
                   
                   <div className=' flex justify-center items-center gap-2'>
                      <div className=' flex items-center gap-2'>
                     
                        {
                            pages.map((page,index)=>{
                                return <div className={`px-3 py-2 border hover:cursor-pointer ${currentPage === page ? ' bg-color_secondary text-white' : 'border-color_primary text-color_primary '}`} key={index} onClick={()=>{
                                    setCurrentPage(page)
                                    console.log(page)
                                    refetch()
                                }}>
                                    {page}
                                </div>
                            })
                        }
                      </div>
                   </div>
}
        </div>
        <div className={`fixed bg-gray-800 bg-opacity-20 top-0 ${isFilterBox ? 'left-0' : '-left-[200%]'}  w-full h-full overflow-y-auto transition-all duration-300 ease-in-out z-40`}>
            <div className=' w-[90%] bg-white p-5'>
                <FilterBox></FilterBox>
            </div>
            <div className=' text-3xl  text-color_light_red absolute top-2 right-2 hover:cursor-pointer' onClick={()=>setFilterBox(false)}>
                <RxCross1></RxCross1>
            </div>
        </div>
       
        </div>
    );
}

export default ProductsBox;
