import React from 'react';

const WidthContainer = ({children}) => {
    return (
        <div className=' max-w-[1400px] mx-auto'>
        {
   children
        }
        </div>
    );
}

export default WidthContainer;
