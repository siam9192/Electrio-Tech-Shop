import axios from 'axios';
import React from 'react';

const AxiosBase = () => {
    
    const base = axios.create({
        baseURL:'http://localhost:5000'
    })
    return base
}

export default AxiosBase;
