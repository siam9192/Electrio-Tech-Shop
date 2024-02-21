import React, { useState } from 'react';
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';
// import products from '../../Components/product'
import ProductsBox from '../../Components/ProductsBox/ProductsBox';
import FilterBox from '../../Components/FilterBox/FilterBox';
import AxiosBase from '../../Axios/AxiosBase';
import ProductsData from '../../TanstackQuery/ProductsData'
 const Products = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [sort,setSort] = useState(0)
    const handleCurrentPage = (page)=>{
        setCurrentPage(page);

    }

    const handleSort = (value)=>{
        setSort(value)
    }
    return (
        <div className=''>
           
                <div className=' md:py-10 py-5  bg-gray-100'>
                  <WidthContainer>
                  <h2 className=' text-xl text-black'>Home / Products</h2>
                  </WidthContainer>

                </div>
            <WidthContainer>
                <div className=' flex gap-5 py-10 '>
                <div className=' w-[30%] lg:block hidden '>
                    <FilterBox currentPage={currentPage} sort={sort}></FilterBox>
                </div>
                    <div className=' w-full lg:px-0 px-2'>
                     <ProductsBox currentPage={currentPage}  setCurrentPage={handleCurrentPage} setSort={handleSort}></ProductsBox>
                    </div>
                </div>
            </WidthContainer>
        </div>
    );
}

export default Products;
