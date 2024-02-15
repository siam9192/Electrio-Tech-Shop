import React from 'react';
import Banner from '../Components/HomeComponets/Banner/Banner';
import FeaturedCategories from '../Components/HomeComponets/FeaturedCategories/FeaturedCategories';
import FlashSales from '../Components/HomeComponets/FlashSales/FlashSales';
import Extra from '../Components/HomeComponets/Extra/Extra';
import Suggested from '../Components/HomeComponets/Suggested/Suggested';
import Sponsors from '../Components/HomeComponets/Sponsors/Sponsors';
import DiscoverTools from '../Components/HomeComponets/DiscoverTools/DiscoverTools';
import LatestBlogs from '../Components/HomeComponets/LatestBlogs/LatestBlogs';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import TrendingItems from '../Components/HomeComponets/TrendingItems/TrendingItems';

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
            {/* <LatestBlogs></LatestBlogs> */}
            <NewsLetter></NewsLetter>
            {/* <TrendingItems></TrendingItems> */}
        </div>
    );
}

export default Home;
