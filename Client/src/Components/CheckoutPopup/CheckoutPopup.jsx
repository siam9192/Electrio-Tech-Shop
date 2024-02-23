import React from 'react';

const CheckoutPopup = () => {
    return (
        <div className=' bg-color_primary bg-opacity-20 w-full h-full fixed top-0 left-0 z-40  backdrop-blur-sm flex justify-center items-center'>

            <div className=' bg-white w-1/2 p-5 rounded-lg shadow-md '>
            <input type="text" className=' w-full py-2 border px-2' />
            </div>
             
        </div>
    );
}

export default CheckoutPopup;
