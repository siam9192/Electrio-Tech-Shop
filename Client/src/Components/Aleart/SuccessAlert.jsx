import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
const SuccessAlert = () => {
    const alertStatus = useSelector(state => state.alert);

    return (
        <div className={`fixed bottom-6 ${alertStatus.status ? 'right-4' : '-right-[200%]'} bg-black bg-opacity-80 p-3 text-white  text-xl duration-300 transition-all `}>
      <div className=' flex items-center gap-2'>
      <div className=' text-green-500 text-2xl'><IoIosCheckmarkCircle></IoIosCheckmarkCircle></div>
      <h1>Successfully Added</h1>
     
      </div>
        </div>
    );
}

export default SuccessAlert;
