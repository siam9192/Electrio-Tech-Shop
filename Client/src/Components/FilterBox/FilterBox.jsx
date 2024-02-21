import React, { useState } from 'react';
import ProductsData from '../../TanstackQuery/ProductsData';
import { createSearchParams, useNavigate } from 'react-router-dom';

const FilterBox = ({currentPage,sort}) => {
    const {refetch,params,removeEmptyParams} = ProductsData(currentPage,sort);
    const [minPrice,setMinPrice] = useState(null);
    const [maxPrice,setMaxPrice] = useState(null) 
    const navigate = useNavigate();
    const categories = [
        'Phones','Laptops','Watches','Cameras','Headphones','Monitors',
        'Tv','Drones'
        
    ]
  

    const brands = ['Apple','Samsung','One Plus','Asus','Realme','Vivo','Infinix','Sony','Msi','Hp','Dell','Dsi','A4Tech'];
 
    const selectQueryValue = (index,e)=>{
        let paramsArray = [...params];
      
        const value = e.target.value;
        if(e.target.checked){
            paramsArray[index][1].push(value)
            
                paramsArray = removeEmptyParams(paramsArray);
              
              
           
            navigate({
                pathname:'/products',
                search:`${createSearchParams(paramsArray)}`
              },{replace:true})

              refetch();
        }
        else{
        const arrIndex =  paramsArray[index][1].indexOf(value);
       
        paramsArray[index][1].splice(arrIndex,1);
        // const tempArray = []
        // paramsArray.forEach((array,index)=>{
           
        //     if(array[1].length){
        //         tempArray.push(array)
               
          
        //     }})
        paramsArray = removeEmptyParams(paramsArray);
              
          
          
        navigate({
            pathname:'/products',
            search:`${createSearchParams(paramsArray)}`
          },{replace:true})
          refetch();
        }

      }
    
    const checkValue = (index,value)=>{
        
        return params[index][1].includes(value)
       }

       const handleKeyword = (e)=>{
        let paramsArray = [...params];
         
        if(e.target.value){
            paramsArray[0][1][0] = e.target.value
        }
        else{
            paramsArray[0][1].pop()
        }
       
        paramsArray = removeEmptyParams(paramsArray);
       
        navigate({
            pathname:'/products',
            search:`${createSearchParams(paramsArray)}`
          },{replace:true})

          refetch();
       }
       const handleMinPrice = (e)=>{
        let paramsArray = [...params];
       
         
        if(e.target.value){
            paramsArray[3][1][0] = e.target.value;
        }
        else{
            paramsArray[3][1].pop()
        }
        paramsArray = removeEmptyParams(paramsArray);
       
        navigate({
            pathname:'/products',
            search:`${createSearchParams(paramsArray)}`
          },{replace:true})

          refetch();
       }
       const handleMaxPrice = (e)=>{
        let paramsArray = [...params];
         
        if(e.target.value){
            paramsArray[4][1][0] = e.target.value
        }
        else{
            paramsArray[4][1].pop()
        }
        paramsArray = removeEmptyParams(paramsArray);
       
        navigate({
            pathname:'/products',
            search:`${createSearchParams(paramsArray)}`
          },{replace:true})

          refetch();
       }

     
   
    return (
        <div className=' space-y-5'>
        <p className=' text-xl'>Search</p>
        <input type="text" defaultValue={params[0][0] === 'key' & params[0][1].length ? params[0][1][0].replace('+',' '): null} placeholder='Enter keyword' className=' w-full py-3 px-2 bg-gray-200 rounded-lg' onChange={handleKeyword} />
     <div className=' space-y-4 max-h-[400px] overflow-y-auto'>
     <p className=' text-xl'>Categories</p>
        <div className=' space-y-2'>
           {
               categories.map((category,index)=>{
                   return <div className=' flex items-center gap-2' key={index}>
                       <input type="checkbox" defaultChecked={checkValue(1,category)} onChange={(e)=>selectQueryValue(1,e)} value={category} className=' w-4 h-4 accent-color_yellow' />
                       <span>{category}</span>

                   </div>
               })
           }
        </div>
     </div>
     <div className=' space-y-2'>
       <h1 className=' text-xl'>Filter by Price</h1>
       <div className=' flex items-center gap-3'>
           <input type="number" defaultValue={minPrice !== null ? minPrice : null} placeholder='Min' className=' w-full py-3 px-1 text-center text-black bg-gray-100 rounded-md' onChange={handleMinPrice}/>
           <input type="number" defaultValue={maxPrice !== null ? maxPrice : null}  placeholder='Max' className=' w-full py-3 px-1 text-center text-black bg-gray-100 rounded-md' onChange={handleMaxPrice} />
       </div>
     </div>
     <div className=' space-y-4 max-h-[400px] overflow-y-auto'>
     <p className=' text-xl'>Brands</p>
        <div className=' space-y-2'>
           {
               brands.map((brand,index)=>{
                   return <div className=' flex items-center gap-2' key={index}>
                       <input type="checkbox" defaultChecked={checkValue(2,brand)} value={brand} className=' w-4 h-4 accent-color_secondary' onChange={(e)=>selectQueryValue(2,e)}/>
                       <span>{brand}</span>

                   </div>
               })
           }
        </div>
     </div>
       </div>
    );
}

export default FilterBox;
