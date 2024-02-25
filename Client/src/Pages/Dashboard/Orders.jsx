import React, { useEffect, useState } from 'react';
import products from '../../Components/product';
import AxiosBase from '../../Axios/AxiosBase';
import UserAuth from '../../Authentication/UserAuth/UserAuth';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    const {user} = UserAuth();

    useEffect(()=>{
if(user){
    AxiosBase().get(`/get/orders/user/${user.email}`)
    .then(res =>{
      setOrders(res.data);
    })

}
    },[user])

    
    return (
        <div className='bg-white p-10 '>
   <h1 className=' text-2xl text-black font-semibold'>My Order Details</h1>


   <div className=' space-y-3 pt-5'>
    {
      orders.length ? 
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className=' text-xl'>
            <th>Product</th>
            <th>Order Date</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Status</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
      
         {
            orders.map((item,index)=>{
             return   <tr key={index}>
                <th>
                  <img src={item.productDetails.images[0]} alt="" className=' w-32 h-32' />
                  <p>{item.productDetails.model.slice(0,30)}...</p>
                </th>
                <td> 
                  <p>12-02-25</p>
                </td>
                <td>{item.quantity}</td>
                <td>
                 <span className=' text-color_light_red font-semibold'>{item.productDetails.pricing.discountPrice}</span>
                </td>
                <td><span className=' font-bold text-color_primary'>{item.total}</span></td>
                <td className=' '><span className='text-white bg-color_secondary px-4 py-1 rounded-full'>Processing</span></td>
                <th>
                  <button className="btn btn-ghost btn-xs capitalize">{item.paymentStatus}</button>
                </th>
              </tr>
            })
         }
        </tbody>
        {/* foot */}
        
        
      </table>
    </div>
      :
     <div className=' flex justify-center items-center flex-col'>
       <img src="https://i.ibb.co/Kr259rg/19197384.jpg" alt=""  className='w-1/2'/>
       <h1 className=' text-center  text-xl pt-3 font-semibold'>You have no order</h1>
     </div>
    }
  
   </div>

            
        </div>
    );
}

export default Orders;
