import React, { useEffect, useState } from 'react';
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';
// import products from '../../Components/product';
import FlashCard from '../../Components/Reuse/Cards/FlashCard';
import AxiosBase from '../../Axios/AxiosBase';

const Brands = () => {
    const brands = ['Apple','Samsung','One Plus','Asus','Realme','Vivo','Infinix','Sony','Msi','Hp','Dell','Dsi','A4Tech'];
    const [active,setActive] = useState(0)
    
    const [loading,setLoading] = useState(false)
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        setLoading(true)
        AxiosBase().get(`/get/products/brand?brand=${brands[active]}`)
        .then(res=>{
            setProducts(res.data)
            setLoading(false)
        })
        
    },[active])
      return(
   
        <div className=' py-10 lg:px-0 px-2'>

            <WidthContainer>
                <div className=' pb-4'>
                    <select name="" id="" className='lg:hidden w-1/2 py-3 px-2  border border-gray-700 rounded-lg bg-white' onChange={(e)=>setActive(parseInt(e.target.value))}>
                        {
                            brands.map((brand,index)=>{
                                return <option value={index}>
  {brand}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div className=' flex  gap-5'>
                    <div className=' w-[30%] lg:block hidden'>
                        {
                            brands.map((brand,index)=>{
                                return <div className={` py-3 hover:cursor-pointer px-4 font-semibold ${active===index? ' bg-color_secondary text-white':''}`} onClick={()=>setActive(index)}>
                                    {brand}
                                </div>
                            })
                        }
                    </div>
                    <div className=' w-full'>
                        <h1 className=' text-2xl font-bold text-color_primary '>Current Brand <span className=' text-color_secondary'>{brands[active]}</span></h1>

                        {
                            products.length?
                            <div className=' py-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                            {
                                products.map((product,index)=>{
                                    return <FlashCard product={product} key={index}></FlashCard>
                                })
                            }
                        </div>
                        :
                        <div className=' py-52 text-center text-color_primary text-3xl font-semibold'>
                            No products of This Brands
                        </div>
                        }
                    </div>

                </div>

            </WidthContainer>
            
        </div>
    );
}

export default Brands;
