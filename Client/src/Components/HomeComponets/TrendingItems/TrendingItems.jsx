import React from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';

const TrendingItems = () => {
    return (
        <div className=' py-10'>

            <WidthContainer>
            <div className=' space-y-1 text-center'>
                        <h3 className=' text-color_secondary font-bold'>TRENDING ITEMS</h3>
                        <h1 className=' text-5xl font-bold text-color_primary'>Today's Flash Sales</h1>
                        </div>
                     
            
            </WidthContainer>
            
        </div>
    );
}

export default TrendingItems;
