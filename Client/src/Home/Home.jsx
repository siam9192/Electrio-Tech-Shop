import React from 'react';
import Banner from '../Components/HomeComponets/Banner/Banner';
import FeaturedCategories from '../Components/HomeComponets/FeaturedCategories/FeaturedCategories';
import FlashSales from '../Components/HomeComponets/FlashSales/FlashSales';
import Extra from '../Components/HomeComponets/Extra/Extra';
import Suggested from '../Components/HomeComponets/Suggested/Suggested';
import Sponsors from '../Components/HomeComponets/Sponsors/Sponsors';
import DiscoverTools from '../Components/HomeComponets/DiscoverTools/DiscoverTools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <FlashSales></FlashSales>
            <Extra></Extra>
            <Suggested></Suggested>
            <Sponsors></Sponsors>
            <DiscoverTools></DiscoverTools>
        </div>
    );
}

export default Home;
