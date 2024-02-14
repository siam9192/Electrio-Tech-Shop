import axios from 'axios';
import React from 'react';

const AxiosBase = () => {
    // https://ego-tech-shop-24hfym13i-siam-hasans-projects.vercel.app
    //ego-tech-shop-11f31hrei-siam-hasans-projects.vercel.app
    // https://ego-tech-shop-d9yasgzet-siam-hasans-projects.vercel.app
    
    const base = axios.create({
        baseURL:'http://localhost:5000'
    })
    return base
}

export default AxiosBase;
