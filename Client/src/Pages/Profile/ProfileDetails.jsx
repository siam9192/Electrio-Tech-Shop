import React, { useEffect, useState } from 'react';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import AxiosBase from '../../Axios/AxiosBase';
import EditProfile from './EditProfile';

const ProfileDetails = () => {
    const {user} = UserAuth();
    const [userProfile,setUserProfile] = useState({})
    const [isEditProfile,setEditProfile] = useState(false);
    useEffect(()=>{
        if(user){
         AxiosBase().get(`/get/user/${user.email}/profile`)
         .then(res => setUserProfile(res.data))
        }
     },[user])
  const cancelProfile = ()=>{
    setEditProfile(false)
  }
   
    return (
        <>
        {
            isEditProfile?
            <EditProfile userProfile={userProfile} cancelProfile={cancelProfile}>

            </EditProfile>
            :
            <div  className=' space-y-3 bg-white p-5'>

        <div className=' py-2 borde'>
        <h1 className=' text-color_primary  text-xl'><span className=' font-bold'>Full Name : </span>
        {userProfile?.details?.firstName + ' '+ userProfile?.details?.lastName}
        </h1>
        </div>
        <div className=' py-2 border-t'>
        <h1 className=' text-color_primary  text-xl'><span className=' font-bold'>Email : </span>{userProfile?.email}</h1>
        </div>
        
        <div className=' py-2 border-t'>
        <h1 className=' text-color_primary  text-xl'><span className=' font-bold'>Billing Address : </span>{userProfile?.details?.billingAddress|| 'Not added'}</h1>
        </div>
        <div className=' py-2 border-t'>
        <h1 className=' text-color_primary  text-xl'><span className=' font-bold'>Shipping Address : </span>{userProfile?.details?.shippingAddress|| 'Not added'}</h1>
        </div>
        
        <div className=' py-2 border-t'>
        <h1 className=' text-color_primary  text-xl'><span className=' font-bold'>Joined : </span>02-04-24</h1>
        </div>
            <div className=' flex justify-end items-center'>
                <button className=' text-white bg-color_primary hover:bg-color_yellow hover:text-color_primary px-6 py-2' onClick={()=>setEditProfile(true)}>Edit Profile</button>
            </div>
        </div>
        }
        </>
    );
}

export default ProfileDetails;
