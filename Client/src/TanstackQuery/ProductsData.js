import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AxiosBase from '../Axios/AxiosBase';
import { createSearchParams, useLocation } from 'react-router-dom';
const ProductsData = (currentPage) => {
    // console.log(currentPage)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const perPage = 10;
    const [params,setParams] = useState([
        ['key',searchParams.get('key')?.split(',').filter(val=> val !== '')||[]],
        ['categories', searchParams.get('categories')?.split(',').filter(val=> val !== '')||[]],
        ['brands',searchParams.get('brands')?.split(',').filter(val=> val !== '')||[]],
        ['minPrice',searchParams.get('minPrice')?.split(',').filter(val=> val !== '')||[]],
        ['maxPrice',searchParams.get('maxPrice')?.split(',').filter(val=> val !== '')||[]]
      ]
    )
    // key=${params[0][1].join(',')}&locations=${params[1][1].join(',')}&types=${params[2][1].join(',')}&status=${params[3][1].join(',')}&features=${params[4][1].join(',')}&sort=${sortBy}
    const {data={},isLoading,refetch} = useQuery({
        queryKey:['products'],
        queryFn:async()=>{
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
     const totalPages = totalProducts/perPage;
     const pages = [

     ]

     for(let i = 1; i < totalPages; i++){
        pages.push(i)
     }
     
    
      return {products,pages,isLoading,refetch,params,removeEmptyParams}
}

export default ProductsData;
