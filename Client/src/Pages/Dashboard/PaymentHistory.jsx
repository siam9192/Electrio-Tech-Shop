import React, { useEffect, useState } from 'react';
import products from '../../Components/product';
import AxiosBase from '../../Axios/AxiosBase';
import UserAuth from '../../Authentication/UserAuth/UserAuth';

const PaymentHistory = () => {

  const [histories,setHistories] = useState([])

  const {user}=UserAuth();

  useEffect(()=>{
   if(user){
    AxiosBase().get(`/get/payment-history/user/${user.email}`)
    .then(res =>{
      setHistories(res.data)
    })
   }
  },[user])

  console.log(histories)
    return (
        <div>
        <div className='bg-white p-10 '>
   <h1 className=' text-2xl text-black font-semibold'>My Payment history</h1>


   <div className=' space-y-3 pt-5'>
   <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Date</th>
        <th>Time</th>
        <th>Amount</th>
        <th>Method</th>
        
      </tr>
    </thead>
    <tbody>

     {
        histories.map((item,index)=>{
         return   <tr key={index}>
           
            <td> 
              <p>{item.paymentTime.date.day<10 ? '0'+item.paymentTime.date.day: item.paymentTime.date.day}-{item.paymentTime.date.month<10 ? '0'+item.paymentTime.date.month: item.paymentTime.date.month}-{item.paymentTime.date.year}</p>
            </td>
            <td>{item.paymentTime.time.hours<10 ? '0'+item.paymentTime.time.hours: item.paymentTime.time.hours}.{item.paymentTime.time.minute<10 ? '0'+item.paymentTime.time.minute: item.paymentTime.time.minute}.{item.paymentTime.time.seconds<10 ? '0'+item.paymentTime.time.seconds: item.paymentTime.time.seconds}</td>
            <td>
             <span className=' text-color_light_red font-semibold'>৳{item.amount}</span>
            </td>
            <td>Bkash</td>
          
          </tr>
        })
     }
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
   </div>

            
        </div>    
        </div>
    );
}

export default PaymentHistory;
