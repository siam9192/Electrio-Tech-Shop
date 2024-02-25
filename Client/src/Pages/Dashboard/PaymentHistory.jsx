import React from 'react';
import products from '../../Components/product';

const PaymentHistory = () => {
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
        products.map((item,index)=>{
         return   <tr key={index}>
           
            <td> 
              <p>12-02-25</p>
            </td>
            <td>13.03.20</td>
            <td>
             <span className=' text-color_light_red font-semibold'>60000</span>
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
