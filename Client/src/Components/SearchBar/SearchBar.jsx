import React from 'react';
import { FaCross } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({isSearch,setSearch}) => {
    const navigate = useNavigate();

    const search = (e)=>{
        const value = e.target.value
    if(e.key === 'Enter'){
         navigate(`/products?key=${value}`)
         e.target.value = ''
         setSearch(false)
    }
    
    }

    return (
        <div className={`absolute  z-40 left-0 w-full bg-color_secondary md:py-20 py-14 flex items-center justify-center lg:px-0 px-5 transition-all duration-200 ${isSearch ? 'top-0' : '-top-[200%]'}`}>
            <input type="text" name="" id="" placeholder=' Search...' className=' md:w-1/2 w-full py-3 px-2 bg-white rounded-md text-black' onKeyDown={search} />
            <div className=' md:text-2xl text-xl text-white absolute md:top-4 top-2 md:right-6 right-2 border-2 rounded-lg p-2 hover:cursor-pointer' onClick={()=>setSearch(false)}>
            <RxCross1></RxCross1>
            </div>
        </div>
    );
}

export default SearchBar;
