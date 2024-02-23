import { useState } from "react";
import { createSearchParams, useLocation } from "react-router-dom";


const SearchParams = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const [params,setParams] = useState([
        ['key',searchParams.get('key')?.split(',').filter(val=> val !== '')||[]],
        ['categories', searchParams.get('categories')?.split(',').filter(val=> val !== '')||[]],
        ['brands',searchParams.get('brands')?.split(',').filter(val=> val !== '')||[]],
        ['minPrice',searchParams.get('minPrice')?.split(',').filter(val=> val !== '')||[]],
        ['maxPrice',searchParams.get('maxPrice')?.split(',').filter(val=> val !== '')||[]]
      ]
    )
    
    
return params 
  
}

export default SearchParams;
