import React from 'react';

const FilterBox = () => {
    const categories = [
        'Phones','Laptops','Watches','Cameras','Headphones','Monitors',
        'Tv','Drones'
        
    ]

    const brands = ['Apple','Samsung','One Plus','Realme','Vivo','Infinix','Sony','Msi','Hp','Dell','Dsi','A4Tech']
    return (
        <div className=' space-y-5'>
        <p className=' text-xl'>Search</p>
        <input type="text" placeholder='Enter keyword' className=' w-full py-3 px-2 bg-gray-200 rounded-lg' />
     <div className=' space-y-4 max-h-[400px] overflow-y-auto'>
     <p className=' text-xl'>Categories</p>
        <div className=' space-y-2'>
           {
               categories.map((category,index)=>{
                   return <div className=' flex items-center gap-2' key={index}>
                       <input type="checkbox" value={category} className=' w-4 h-4 accent-color_yellow' />
                       <span>{category}</span>

                   </div>
               })
           }
        </div>
     </div>
     <div className=' space-y-2'>
       <h1 className=' text-xl'>Filter by Price</h1>
       <div className=' flex items-center gap-3'>
           <input type="number" placeholder='Min' className=' w-full py-3 px-1 text-center text-black bg-gray-100 rounded-md' />
           <input type="number" placeholder='Max' className=' w-full py-3 px-1 text-center text-black bg-gray-100 rounded-md' />
       </div>
     </div>
     <div className=' space-y-4 max-h-[400px] overflow-y-auto'>
     <p className=' text-xl'>Brands</p>
        <div className=' space-y-2'>
           {
               brands.map((brand,index)=>{
                   return <div className=' flex items-center gap-2' key={index}>
                       <input type="checkbox" value={brand} className=' w-4 h-4 accent-color_secondary' />
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
