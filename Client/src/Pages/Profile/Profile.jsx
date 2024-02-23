import React, { useEffect, useState } from 'react';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../Axios/AxiosBase';
import products from '../../Components/product'
import WidthContainer from '../../Components/Reuse/WidthContainer/WidthContainer';
import ProfileDetails from './ProfileDetails';
import OrderDetails from './OrderDetails'
const Profile = () => {
    const {user} = UserAuth();
    const [userProfile,setUserProfile] = useState({})
    const [activeTab,setActiveTab] = useState(0)
    

    const tabs = [
        'Profile','My order','Payment History'
    ]
    return (
        <div className='  py-10'>

            <WidthContainer>
           <div className=' flex justify-center'>
           <div className=' space-y-6 md:w-1/2 w-full  border p-5'>
            <div className=''>
                <div className=' flex items-center gap-2'>
                    <img src={user?.profilePhoto||'https://i.ibb.co/n7Js4vF/morskie-oko-tatry-1.jpg'} alt="" className=' w-20 h-20 rounded-full' />
                   <div className=' space-y-1'>
                   <h1 className=' text-2xl text-color_primary font-semibold'>{'Arafat Hasan Siam'}</h1>
                    
                    <p>{'ahsiam999@gmail.com'}</p>
                   </div>
                </div>

            </div>
            <div className='flex items-center'>
                {
                    tabs.map((tab,index)=>{
                  return  <button className={`py-3 px-8 ${index===activeTab ? 'bg-color_secondary text-white' : ''}  font-semibold`} key={index} onClick={()=>setActiveTab(index)}>{tab}</button>
                    }) 
                }

            </div>
          {
            activeTab === 0 ?
            <ProfileDetails></ProfileDetails> 
            :
            activeTab  === 1  &&
            <OrderDetails></OrderDetails>
            
          }
             
            </div>

           </div>
            </WidthContainer>
            
        </div>
    );
}

export default Profile;
