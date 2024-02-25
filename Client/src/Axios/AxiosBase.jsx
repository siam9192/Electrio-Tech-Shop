import axios from 'axios';
import React from 'react';

const AxiosBase = () => {
    // https://electio-db3x18ln2-siam-hasans-projects.vercel.app 
    //  http://localhost:5000
    // https://electio-cu94kxkf5-siam-hasans-projects.vercel.app/api/v1
    const base = axios.create({
        baseURL:'http://localhost:5000/api/v1'
    })
    return base
}

export default AxiosBase;
