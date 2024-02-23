import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AxiosBase from '../Axios/AxiosBase';
import { createSearchParams, useLocation } from 'react-router-dom';
const ProductsData = (currentPage) => {
    // console.log(currentPage)
    const location = useLocation();
    const [searchParams,setSearchParams] = useState(new URLSearchParams(location.search));
  
    useEffect(()=>{
      
        setSearchParams(new URLSearchParams(location.search))
         },[location.search])
    const perPage = 12;
    const [params,setParams] = useState([
        ['key',searchParams.get('key')?.split(',').filter(val=> val !== '')||[]],
        ['categories', searchParams.get('categories')?.split(',').filter(val=> val !== '')||[]],
        ['brands',searchParams.get('brands')?.split(',').filter(val=> val !== '')||[]],
        ['minPrice',searchParams.get('minPrice')?.split(',').filter(val=> val !== '')||[]],
        ['maxPrice',searchParams.get('maxPrice')?.split(',').filter(val=> val !== '')||[]],
        ['sort',searchParams.get('short')?.split(',').filter(val=> val !== '')||[]]

      ]
    )
    
    const {data={},isLoading,isFetching,refetch} = useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            console.log('refetch request')
            const res = await AxiosBase().get(`/get/products?${createSearchParams(params)}&perPage=${perPage}&currentPage=${currentPage}`)
            return res.data
        }
      })
     const removeEmptyParams = (paramsArray)=>{
        const tempArray = [];
        paramsArray.forEach((array,index)=>{
             
            if(array[1].length){

                tempArray.push(array)
               
            }})
            
            return tempArray;
     }

     const products = data.products||[];
     const totalProducts = data.totalProducts;
     const totalPages = Math.ceil(totalProducts/perPage);
     const pages = [

     ]

     for(let i = 1; i < totalPages; i++){
        pages.push(i)
     }
    
  
      return {products,totalProducts,pages,isLoading,isFetching,refetch,params,removeEmptyParams}
}

export default ProductsData;
